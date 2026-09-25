"use client";

import React, { useState } from 'react';
import { logoutAction } from '../../app/admin/login/actions';
import {
  PresupuestoEnvioData,
  TarifaItem,
  TipoEnvio,
  generarPDFAndesBox,
  construirMensajeWhatsApp,
  formatearNumeroPresupuesto,
  formatearUSD,
  formatearARS,
} from './PresupuestoPDF';

const azul = "#3b82f6";

interface Props {
  vendedorInicial: string;
}

const hoyInput = () => new Date().toISOString().slice(0, 10);

const ETIQUETA_POR_TIPO: Record<TipoEnvio, string> = {
  internacional: 'Logística + gestión aduanera',
  nacional: 'Logística + gestión',
  maritimo: 'Flete marítimo',
};

const EJEMPLO_MARITIMO = [
  'Flete marítimo',
  'Cargos en tránsito / puerto',
  'Flete terrestre',
  'Entrega en destino',
];

const CONCEPTOS_PRESET = [
  ...Object.values(ETIQUETA_POR_TIPO),
  ...EJEMPLO_MARITIMO,
  '',
];

export default function PresupuestosEnvio({ vendedorInicial }: Props) {
  const [form, setForm] = useState({
    vendedor: vendedorInicial,
    fecha: hoyInput(),
    cliente: '',
    telefono: '',
    dni: '',
    email: '',
    descripcion: '',
    peso: '',
    cantidad: '1',
    bultos_texto: '',
    volumen: '',
    medidas: '',
    origen: '',
    destino: '',
    tipo_envio: 'internacional' as TipoEnvio,
    categoria: '',
    items: [{ concepto: ETIQUETA_POR_TIPO.internacional, monto_usd: '' }] as {
      concepto: string;
      monto_usd: string;
    }[],
    profit: '',
    precio_ars: '',
    tarifa_kg: '8',
    tasa_ars: '1300',
    nota: '',
  });

  const [mensaje, setMensaje] = useState<string | null>(null);
  const [tipoMensaje, setTipoMensaje] = useState<'ok' | 'error'>('ok');
  const [errorValidacion, setErrorValidacion] = useState('');

  const actualizar = (campo: string, valor: string) =>
    setForm((prev) => ({ ...prev, [campo]: valor }));

  // --- Tarifas: totales en vivo ---
  const subtotalUSD = form.items.reduce((acc, i) => acc + (Number(i.monto_usd) || 0), 0);
  const profitUSD = Number(form.profit) || 0;
  const totalUSD = subtotalUSD + profitUSD;

  const tasaARS = Number(form.tasa_ars) || 0;

  // Actualiza tarifas/profit/tasa y recalcula el equivalente en pesos
  const aplicarTarifas = (patch: Partial<typeof form>) =>
    setForm((prev) => {
      const items = patch.items ?? prev.items;
      const profit = patch.profit ?? prev.profit;
      const tasa = Number(patch.tasa_ars ?? prev.tasa_ars) || 0;
      const subtotal = items.reduce((acc, i) => acc + (Number(i.monto_usd) || 0), 0);
      const total = subtotal + (Number(profit) || 0);
      const precio_ars = total && tasa ? String(Math.round(total * tasa)) : prev.precio_ars;
      return { ...prev, ...patch, precio_ars };
    });

  // --- Ítems de tarifa ---
  const agregarItem = () =>
    aplicarTarifas({ items: [...form.items, { concepto: '', monto_usd: '' }] });

  const modificarItem = (indice: number, campo: 'concepto' | 'monto_usd', valor: string) =>
    aplicarTarifas({
      items: form.items.map((item, i) => (i === indice ? { ...item, [campo]: valor } : item)),
    });

  const eliminarItem = (indice: number) =>
    aplicarTarifas({ items: form.items.filter((_, i) => i !== indice) });

  const cambiarTipo = (tipo: TipoEnvio) => {
    if (tipo === form.tipo_envio) return;
    const intacto =
      form.items.length === 1 &&
      !Number(form.items[0].monto_usd) &&
      CONCEPTOS_PRESET.includes(form.items[0].concepto);
    if (!intacto) {
      setForm((prev) => ({ ...prev, tipo_envio: tipo }));
      return;
    }
    const items =
      tipo === 'maritimo'
        ? EJEMPLO_MARITIMO.map((concepto) => ({ concepto, monto_usd: '' }))
        : [{ concepto: ETIQUETA_POR_TIPO[tipo], monto_usd: '' }];
    aplicarTarifas({ tipo_envio: tipo, items });
  };

  const cargarEjemploMaritimo = () =>
    aplicarTarifas({
      items: EJEMPLO_MARITIMO.map((concepto, i) => ({
        concepto,
        monto_usd: form.items[i]?.monto_usd || '',
      })),
    });

  // --- Autocompletar un ítem según peso y tarifa por kg ---
  const sugerenciaUSD = () => {
    const peso = Number(form.peso) || 0;
    const tarifa = Number(form.tarifa_kg) || 0;
    return peso * tarifa;
  };

  const aplicarSugerenciaUSD = () => {
    const sugerencia = sugerenciaUSD();
    if (!sugerencia) return;
    const valor = String(sugerencia);
    const indice = form.items.findIndex((i) => !Number(i.monto_usd));
    const items =
      indice >= 0
        ? form.items.map((item, i) =>
            i === indice ? { ...item, concepto: item.concepto || 'Flete', monto_usd: valor } : item
          )
        : [...form.items, { concepto: 'Flete', monto_usd: valor }];
    aplicarTarifas({ items });
  };

  // --- Convertir USD a ARS ---
  const convertirAARS = () =>
    setForm((prev) => ({ ...prev, precio_ars: String(Math.round(totalUSD * tasaARS)) }));

  const notificar = (texto: string, ok = true) => {
    setMensaje(texto);
    setTipoMensaje(ok ? 'ok' : 'error');
    setTimeout(() => setMensaje(null), 3500);
  };

  const construirPresupuesto = (): PresupuestoEnvioData | { error: string } | null => {
    const peso = Number(form.peso);
    const items: TarifaItem[] = form.items
      .filter((i) => i.concepto.trim() && Number(i.monto_usd))
      .map((i) => ({ concepto: i.concepto.trim(), monto_usd: Number(i.monto_usd) }));

    if (!form.fecha) return { error: 'Falta la fecha del presupuesto.' };
    if (!form.cliente.trim()) return { error: 'Falta el nombre del cliente.' };
    if (!form.origen.trim()) return { error: 'Falta el origen (desde).' };
    if (!form.destino.trim()) return { error: 'Falta el destino (hacia).' };
    if (!peso || peso <= 0) return { error: 'El peso debe ser mayor a 0 kg.' };
    if (!items.length) return { error: 'Agregá al menos un ítem de tarifa con importe mayor a 0.' };

    const subtotal = items.reduce((acc, i) => acc + i.monto_usd, 0);
    const profit = Number(form.profit) || 0;
    const total = subtotal + profit;

    const id = Date.now();
    return {
      id,
      numero: formatearNumeroPresupuesto(id),
      fecha: form.fecha,
      vendedor: form.vendedor.trim() || vendedorInicial,
      cliente: form.cliente.trim(),
      telefono: form.telefono.trim(),
      dni: form.dni.trim(),
      email: form.email.trim(),
      descripcion: form.descripcion.trim(),
      peso_kg: peso,
      cantidad: Number(form.cantidad) || 1,
      bultos_texto: form.bultos_texto.trim(),
      volumen: form.volumen.trim(),
      medidas: form.medidas.trim(),
      origen: form.origen.trim(),
      destino: form.destino.trim(),
      tipo_envio: form.tipo_envio,
      categoria: form.categoria,
      items,
      profit_usd: profit,
      precio_usd: total,
      precio_ars: Number(form.precio_ars) || Math.round(total * tasaARS),
      nota: form.nota.trim(),
    };
  };

  const generarPDF = () => {
    const construido = construirPresupuesto();
    if (!construido) return;
    if ('error' in construido) {
      setErrorValidacion(construido.error);
      return;
    }
    setErrorValidacion('');
    generarPDFAndesBox(construido);
    notificar('PDF generado. Elegí "Guardar como PDF" para descargarlo.');
  };

  const enviarWhatsApp = () => {
    const construido = construirPresupuesto();
    if (!construido) return;
    if ('error' in construido) {
      setErrorValidacion(construido.error);
      return;
    }
    setErrorValidacion('');
    const msg = construirMensajeWhatsApp(construido);
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
    notificar('Cotización enviada a WhatsApp.');
  };

  // --- estilos reutilizables ---
  const label: React.CSSProperties = {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '6px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  };

  const input: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '13px 15px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.12)',
    backgroundColor: 'rgba(255,255,255,0.06)',
    color: '#fff',
    outline: 'none',
    fontSize: '0.92rem',
  };

  const botonTipo = (activo: boolean): React.CSSProperties => ({
    flex: 1,
    padding: '13px 10px',
    borderRadius: '12px',
    border: `1px solid ${activo ? azul : 'rgba(255,255,255,0.15)'}`,
    backgroundColor: activo ? `${azul}30` : 'rgba(255,255,255,0.04)',
    color: '#fff',
    fontWeight: activo ? 800 : 500,
    fontSize: '0.85rem',
    cursor: 'pointer',
    transition: 'all 0.25s',
  });

  const botonChico: React.CSSProperties = {
    padding: '0 14px',
    borderRadius: '12px',
    border: `1px solid ${azul}`,
    backgroundColor: `${azul}25`,
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '0.75rem',
    whiteSpace: 'nowrap',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      {/* BARRA SUPERIOR */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5%', height: '72px', backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.5px', background: `linear-gradient(135deg, #ffffff 30%, ${azul} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          ANDESBOX
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
            Generador de Presupuestos
          </span>
          <form action={logoutAction}>
            <button type="submit" style={{ padding: '9px 16px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700 }}>
              Cerrar sesión
            </button>
          </form>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '35px 5% 80px' }}>

        {/* NOTIFICACIÓN */}
        {mensaje && (
          <div style={{ position: 'fixed', top: '90px', right: '25px', zIndex: 500, padding: '12px 22px', borderRadius: '13px', fontWeight: 700, fontSize: '0.88rem', backgroundColor: tipoMensaje === 'ok' ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)', border: `1px solid ${tipoMensaje === 'ok' ? '#10b981' : '#ef4444'}`, color: '#fff', backdropFilter: 'blur(15px)' }}>
            {mensaje}
          </div>
        )}

        {/* FORMULARIO */}
        <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '28px', padding: 'clamp(20px, 5vw, 38px)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ margin: '0 0 6px', fontSize: '1.6rem', fontWeight: 900 }}>Nuevo Presupuesto</h2>
          <p style={{ margin: '0 0 26px', color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem' }}>Completá los datos del envío y descargá el documento.</p>

          {/* DATOS DEL PRESUPUESTO: VENDEDOR + FECHA */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '24px' }}>
            <div>
              <label style={label}>Vendedor *</label>
              <input style={input} value={form.vendedor} onChange={(e) => actualizar('vendedor', e.target.value)} placeholder="Quién realiza el presupuesto" />
            </div>
            <div>
              <label style={label}>Fecha *</label>
              <input style={input} type="date" value={form.fecha} onChange={(e) => actualizar('fecha', e.target.value)} />
            </div>
          </div>

          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: azul, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>1. Datos del Cliente</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '24px' }}>
            <input style={input} placeholder="Nombre y Apellido *" value={form.cliente} onChange={(e) => actualizar('cliente', e.target.value)} />
            <input style={input} placeholder="Teléfono / WhatsApp" value={form.telefono} onChange={(e) => actualizar('telefono', e.target.value)} />
            <input style={input} placeholder="DNI / CUIT" value={form.dni} onChange={(e) => actualizar('dni', e.target.value)} />
            <input style={input} placeholder="Email" value={form.email} onChange={(e) => actualizar('email', e.target.value)} />
          </div>

          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: azul, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>2. Encomienda / Embarque</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '14px' }}>
            <input style={input} placeholder="Contenido / Descripción" value={form.descripcion} onChange={(e) => actualizar('descripcion', e.target.value)} />
            <input style={input} type="number" step="0.01" placeholder="Peso bruto en kg *" value={form.peso} onChange={(e) => actualizar('peso', e.target.value)} />
            <input style={input} type="number" placeholder="Cantidad de bultos / packages" value={form.cantidad} onChange={(e) => actualizar('cantidad', e.target.value)} />
            <input style={input} placeholder='Bultos (texto) Ej: 34 cartons' value={form.bultos_texto} onChange={(e) => actualizar('bultos_texto', e.target.value)} />
            <input style={input} placeholder='Volumen (VOL) Ej: 3 cbm' value={form.volumen} onChange={(e) => actualizar('volumen', e.target.value)} />
            <input style={input} placeholder="Medidas (alto x ancho x largo) cm" value={form.medidas} onChange={(e) => actualizar('medidas', e.target.value)} />
          </div>

          {/* TIPO DE ENVÍO */}
          <label style={label}>Tipo de Envío</label>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '18px' }}>
            <button type="button" style={botonTipo(form.tipo_envio === 'internacional')} onClick={() => cambiarTipo('internacional')}>
              🌎 Internacional
            </button>
            <button type="button" style={botonTipo(form.tipo_envio === 'nacional')} onClick={() => cambiarTipo('nacional')}>
              🇦🇷 Nacional
            </button>
            <button type="button" style={botonTipo(form.tipo_envio === 'maritimo')} onClick={() => cambiarTipo('maritimo')}>
              🚢 Marítimo
            </button>
          </div>

          {/* RUTA */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '18px' }}>
            <div>
              <label style={label}>Origen (desde) *</label>
              <input style={input} placeholder="Ej: Qingdao, China / Miami, USA" value={form.origen} onChange={(e) => actualizar('origen', e.target.value)} />
            </div>
            <div>
              <label style={label}>Destino (hacia) *</label>
              <input style={input} placeholder="Ej: Mendoza vía Chile" value={form.destino} onChange={(e) => actualizar('destino', e.target.value)} />
            </div>
            <div>
              <label style={label}>Categoría</label>
              <select style={{ ...input, cursor: 'pointer' }} value={form.categoria} onChange={(e) => actualizar('categoria', e.target.value)}>
                <option value="" style={{ background: '#0f172a' }}>Sin categoría</option>
                <option style={{ background: '#0f172a' }}>Tecnología / Electrónica</option>
                <option style={{ background: '#0f172a' }}>Indumentaria / Calzado</option>
                <option style={{ background: '#0f172a' }}>Repuestos</option>
                <option style={{ background: '#0f172a' }}>Cosmética / Suplementos</option>
                <option style={{ background: '#0f172a' }}>Documentación</option>
                <option style={{ background: '#0f172a' }}>Carga General</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: azul, letterSpacing: '1px', textTransform: 'uppercase' }}>3. Tarifas y Costos de Logística</div>
            {form.tipo_envio === 'maritimo' && (
              <button type="button" onClick={cargarEjemploMaritimo} style={{ ...botonChico, padding: '7px 14px' }}>
                Cargar desglose marítimo
              </button>
            )}
          </div>

          {/* ÍTEMS DE TARIFA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
            {form.items.map((item, indice) => (
              <div key={indice} style={{ display: 'grid', gridTemplateColumns: '1fr 170px 42px', gap: '8px', alignItems: 'center' }}>
                <input
                  style={input}
                  placeholder="Concepto (Ej: Flete marítimo)"
                  value={item.concepto}
                  onChange={(e) => modificarItem(indice, 'concepto', e.target.value)}
                />
                <input
                  style={input}
                  type="number"
                  step="0.01"
                  placeholder="USD 0,00"
                  value={item.monto_usd}
                  onChange={(e) => modificarItem(indice, 'monto_usd', e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => eliminarItem(indice)}
                  title="Eliminar concepto"
                  style={{ height: '46px', borderRadius: '12px', border: '1px solid rgba(239,68,68,0.5)', backgroundColor: 'rgba(239,68,68,0.12)', color: '#ff6b6b', cursor: 'pointer', fontWeight: 800, fontSize: '1rem' }}
                >
                  ✕
                </button>
              </div>
            ))}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button type="button" onClick={agregarItem} style={{ ...botonChico, padding: '10px 16px' }}>
                + Agregar concepto
              </button>
              <button type="button" onClick={aplicarSugerenciaUSD} title="Calcular según peso y tarifa por kg" style={{ ...botonChico, padding: '10px 16px' }}>
                AUTO (peso × tarifa)
              </button>
            </div>
          </div>

          {/* PROFIT + TOTALES */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '14px' }}>
            <div>
              <label style={label}>Mi profit / Gestión (USD)</label>
              <input style={input} type="number" step="0.01" placeholder="0.00" value={form.profit} onChange={(e) => aplicarTarifas({ profit: e.target.value })} />
            </div>
            <div>
              <label style={label}>Tarifa USD / kg (referencia)</label>
              <input style={input} type="number" step="0.1" placeholder="8" value={form.tarifa_kg} onChange={(e) => actualizar('tarifa_kg', e.target.value)} />
            </div>
            <div>
              <label style={label}>Equivalente en ARS</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input style={input} type="number" step="1" placeholder="0" value={form.precio_ars} onChange={(e) => actualizar('precio_ars', e.target.value)} />
                <button type="button" onClick={convertirAARS} title="Convertir USD a ARS" style={{ ...botonChico, flexShrink: 0 }}>
                  USD→ARS
                </button>
              </div>
            </div>
            <div>
              <label style={label}>Tipo de cambio</label>
              <input style={input} type="number" step="1" placeholder="1300" value={form.tasa_ars} onChange={(e) => aplicarTarifas({ tasa_ars: e.target.value })} />
            </div>
          </div>

          {/* RESUMEN EN VIVO */}
          <div style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: '14px', overflow: 'hidden', marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: 'rgba(255,255,255,0.04)', fontSize: '0.85rem', fontWeight: 700 }}>
              <span>Subtotal Tarifas Logísticas</span>
              <span>{formatearUSD(subtotalUSD)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: 'rgba(255,255,255,0.04)', fontSize: '0.85rem', fontWeight: 700, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <span>Mi profit / Gestión</span>
              <span>{formatearUSD(profitUSD)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 14px', backgroundColor: `${azul}25`, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '1rem', fontWeight: 900 }}>
              <span>COSTO TOTAL ESTIMADO</span>
              <span>{formatearUSD(totalUSD)} {Number(form.precio_ars) ? `/ ${formatearARS(Number(form.precio_ars))}` : ''}</span>
            </div>
          </div>

          <textarea
            style={{ ...input, minHeight: '70px', resize: 'none', marginBottom: '18px' }}
            placeholder="Observaciones (opcional)"
            value={form.nota}
            onChange={(e) => actualizar('nota', e.target.value)}
          />

          {errorValidacion && (
            <div style={{ marginBottom: '16px', padding: '11px 14px', borderRadius: '11px', color: '#ff6b6b', backgroundColor: 'rgba(255,60,60,0.12)', border: '1px solid rgba(255,60,60,0.3)', fontSize: '0.85rem', fontWeight: 600 }}>
              {errorValidacion}
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            <button onClick={generarPDF} style={{ padding: '16px', borderRadius: '13px', border: 'none', backgroundColor: '#8e44ad', color: '#fff', fontWeight: 800, cursor: 'pointer', fontSize: '0.9rem' }}>
              📄 Generar PDF (A4)
            </button>
            <button onClick={enviarWhatsApp} style={{ padding: '16px', borderRadius: '13px', border: 'none', backgroundColor: '#25d366', color: '#fff', fontWeight: 800, cursor: 'pointer', fontSize: '0.9rem' }}>
              📱 Enviar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
