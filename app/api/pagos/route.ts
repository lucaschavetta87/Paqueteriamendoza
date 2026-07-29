import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

// Clave de Mercado Pago
const client = new MercadoPagoConfig({ accessToken: '' });

export async function POST(req: Request) {
  try {
    const { items, idPedido } = await req.json();

    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: items.map((i: any) => ({
          title: i.producto.nombre,
          quantity: i.cantidad,
          unit_price: Number(i.producto.precio),
        })),
        // CONFIGURACIÓN CLAVE: Agregamos el retorno automático y las respuestas de estado
        back_urls: {
          success: "", 
          failure: "",
          pending: "",
        },
        auto_return: "approved", // Fuerza a Mercado Pago a redireccionar al instante al terminar de pagar
        external_reference: String(idPedido), 
      },
    });

    return NextResponse.json({ init_point: result.init_point });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear la preferencia' }, { status: 500 });
  }
}