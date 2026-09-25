"use client";

// Datos de cabecera de la empresa (editar cuando tengas los datos definitivos)
export const DATOS_ANDESBOX = {
  cuit: 'CUIT: 20-00000000-0',
  direccion: 'Salta 1161, Ciudad, Mendoza',
  telefono: '+54 9 261 685-2139',
  web: 'www.andesbox.com.ar',
};

export type TipoEnvio = 'nacional' | 'internacional' | 'maritimo';

export interface TarifaItem {
  concepto: string;
  monto_usd: number;
}

export interface PresupuestoEnvioData {
  id: number;
  numero: string;
  fecha: string;
  vendedor: string;
  cliente: string;
  telefono: string;
  dni: string;
  email: string;
  descripcion: string;
  peso_kg: number;
  cantidad: number;
  bultos_texto: string;
  volumen: string;
  medidas: string;
  origen: string;
  destino: string;
  tipo_envio: TipoEnvio;
  categoria: string;
  items: TarifaItem[];
  profit_usd: number;
  precio_usd: number;
  precio_ars: number;
  nota: string;
}

// Formatea "2026-09-23" a "23/09/2026" (o deja el texto tal cual si ya viene formateado)
export function formatearFecha(fecha: string): string {
  if (!fecha) return '';
  const partes = fecha.split('-');
  if (partes.length === 3 && partes[0].length === 4) {
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }
  return fecha;
}

function escapeHtml(texto: string): string {
  return (texto || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function formatearNumeroPresupuesto(id: number): string {
  if (!id) return '000001';
  const numeroCorto = (id % 10000) + 100;
  return String(numeroCorto).padStart(6, '0');
}

export function formatearUSD(valor: number): string {
  return 'USD ' + Number(valor || 0).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatearARS(valor: number): string {
  return '$ ' + Number(valor || 0).toLocaleString('es-AR', { maximumFractionDigits: 0 });
}

export function etiquetaServicio(tipo: TipoEnvio): string {
  if (tipo === 'maritimo') return 'ENVÍO INTERNACIONAL MARÍTIMO + TERRESTRE';
  if (tipo === 'nacional') return 'ENVÍO NACIONAL';
  return 'ENVÍO INTERNACIONAL';
}

export function etiquetaCorta(tipo: TipoEnvio): string {
  if (tipo === 'maritimo') return 'ENVÍO MARÍTIMO';
  if (tipo === 'nacional') return 'ENVÍO NACIONAL';
  return 'ENVÍO INTERNACIONAL';
}

export function subtotalItems(items: TarifaItem[]): number {
  return (items || []).reduce((acc, i) => acc + (Number(i.monto_usd) || 0), 0);
}

export function totalPresupuesto(items: TarifaItem[], profit: number): number {
  return subtotalItems(items) + (Number(profit) || 0);
}

function textoBultos(d: PresupuestoEnvioData): string {
  if (d.bultos_texto?.trim()) return d.bultos_texto.trim();
  const cantidad = Number(d.cantidad || 1);
  return `${cantidad} ${cantidad === 1 ? 'bulto' : 'bultos'}`;
}

// Genera el PDF A4 profesional y abre el diálogo de impresión
export function generarPDFAndesBox(d: PresupuestoEnvioData) {
  const ventana = window.open('', '_blank', 'width=900,height=1100');
  if (!ventana) return;

  const servicio = etiquetaServicio(d.tipo_envio);

  const detalleFilas: { label: string; valor: string }[] = [
    { label: 'ORIGEN (DESDE)', valor: d.origen },
    { label: 'DESTINO (HACIA)', valor: d.destino },
    {
      label: 'CANTIDAD DE BULTOS / PACKAGES (PCS)',
      valor: textoBultos(d),
    },
  ];
  if (d.volumen) detalleFilas.push({ label: 'VOLUMEN (VOL)', valor: d.volumen });
  detalleFilas.push(
    { label: 'PESO BRUTO (G.W.)', valor: `${Number(d.peso_kg || 0).toLocaleString('es-AR')} kg` },
    { label: 'SERVICIO', valor: servicio }
  );
  if (d.descripcion) detalleFilas.push({ label: 'CONTENIDO DE LA ENCOMIENDA', valor: d.descripcion });
  if (d.medidas) detalleFilas.push({ label: 'MEDIDAS (ALTO x ANCHO x LARGO)', valor: d.medidas });
  if (d.categoria) detalleFilas.push({ label: 'CATEGORÍA', valor: d.categoria });

  const filasTabla = detalleFilas
    .map((f) => `<tr><td class="lbl">${escapeHtml(f.label)}</td><td class="val">${escapeHtml(f.valor).toUpperCase()}</td></tr>`)
    .join('');

  const subtotal = subtotalItems(d.items);
  const profit = Number(d.profit_usd) || 0;
  const total = subtotal + profit > 0 ? subtotal + profit : Number(d.precio_usd) || 0;

  const filasTarifas = (d.items || [])
    .filter((i) => i.concepto.trim() && Number(i.monto_usd) !== 0)
    .map(
      (i) =>
        `<tr class="tarifa"><td class="tarifa-lbl">${escapeHtml(i.concepto.trim())}</td><td class="tarifa-val">${formatearUSD(Number(i.monto_usd))}</td></tr>`
    )
    .join('');

  const html = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Presupuesto ${escapeHtml(d.numero)} - AndesBox</title>
    <style>
      @page { size: A4; margin: 13mm; }
      * { box-sizing: border-box; }
      body { font-family: 'Segoe UI', Arial, Helvetica, sans-serif; color: #111; line-height: 1.45; margin: 0; padding: 0; font-size: 13px; }
      .head { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #0f172a; padding-bottom: 14px; }
      .logo-block .brand { font-size: 34px; font-weight: 900; letter-spacing: -1px; color: #0f172a; line-height: 1; }
      .logo-block .brand span { color: #3b82f6; }
      .logo-block .subtitle { font-size: 10px; letter-spacing: 3px; color: #475569; text-transform: uppercase; font-weight: 700; margin-top: 5px; }
      .datos-empresa { text-align: right; font-size: 10.5px; color: #334155; line-height: 1.55; }
      .datos-empresa b { color: #0f172a; }
      .titulo-banda { display: flex; justify-content: space-between; align-items: center; margin: 18px 0 14px; }
      .titulo-banda h1 { margin: 0; font-size: 20px; font-weight: 900; letter-spacing: 2px; color: #0f172a; }
      .titulo-banda .refs { text-align: right; font-size: 11px; color: #334155; line-height: 1.6; }
      .titulo-banda .refs b { color: #0f172a; }
      .sec { margin-bottom: 16px; }
      .sec-title { font-size: 11px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; color: #3b82f6; margin-bottom: 8px; }
      .grid-cliente { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5px; background: #0f172a; padding: 1.5px; }
      .grid-cliente .cell { background: #fff; padding: 9px 12px; }
      .grid-cliente .lbl { display: block; font-size: 9px; color: #64748b; letter-spacing: 1px; text-transform: uppercase; font-weight: 700; }
      .grid-cliente .val { font-size: 13px; font-weight: 700; color: #0f172a; }
      .tabla { width: 100%; border-collapse: collapse; }
      .tabla th { background: #0f172a; color: #fff; padding: 9px 12px; text-align: left; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; }
      .tabla td { border: 1px solid #cbd5e1; padding: 8px 12px; vertical-align: top; font-size: 12.5px; }
      .tabla .lbl { font-size: 9px; color: #64748b; letter-spacing: 1px; text-transform: uppercase; font-weight: 700; width: 42%; }
      .tabla .val { font-weight: 700; color: #0f172a; text-transform: uppercase; }
      .tarifas { width: 100%; border-collapse: collapse; }
      .tarifas td { border: 1px solid #cbd5e1; padding: 8px 12px; font-size: 12.5px; }
      .tarifas .tarifa-lbl { color: #111; }
      .tarifas .tarifa-val { text-align: right; font-weight: 700; color: #0f172a; white-space: nowrap; width: 34%; }
      .tarifas .subtotal td { background: #f8fafc; font-weight: 700; }
      .tarifas .profit td { background: #f8fafc; }
      .tarifas .total td { background: #0f172a; color: #fff; font-weight: 900; font-size: 14px; border-color: #0f172a; }
      .tarifas .total .tarifa-val { color: #fff; }
      .totales { margin-top: 12px; border: 2px solid #0f172a; }
      .totales .fila { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #f1f5f9; }
      .totales .lbl { font-weight: 700; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: #334155; }
      .totales .monto { font-weight: 900; font-size: 13px; text-align: right; color: #0f172a; }
      .nota { margin-top: 12px; border: 1px solid #94a3b8; padding: 10px 12px; font-size: 11.5px; white-space: pre-line; }
      .nota b { font-size: 9px; letter-spacing: 1px; text-transform: uppercase; color: #475569; }
      .footer { margin-top: 22px; border-top: 1px solid #94a3b8; padding-top: 8px; text-align: center; font-size: 10px; color: #475569; }
      .footer b { color: #0f172a; }
      .badge { display: inline-block; background: #3b82f6; color: #fff; font-weight: 800; font-size: 10.5px; letter-spacing: 1px; padding: 3px 10px; border-radius: 20px; }
    </style>
  </head>
  <body>
    <div class="head">
      <div class="logo-block">
        <div class="brand">ANDES<span>BOX</span></div>
        <div class="subtitle">Envíos y Logística Internacional</div>
      </div>
      <div class="datos-empresa">
        <b>${escapeHtml(DATOS_ANDESBOX.direccion)}</b><br />
        ${escapeHtml(DATOS_ANDESBOX.cuit)}<br />
        Tel: ${escapeHtml(DATOS_ANDESBOX.telefono)}<br />
        ${escapeHtml(DATOS_ANDESBOX.web)}
      </div>
    </div>

    <div class="titulo-banda">
      <h1>PRESUPUESTO DE ENVÍO</h1>
      <div class="refs">
        <div><b>N°:</b> ${escapeHtml(d.numero)}&nbsp;&nbsp;|&nbsp;&nbsp;<b>Fecha:</b> ${escapeHtml(formatearFecha(d.fecha))}</div>
        <div><b>Vendedor:</b> ${escapeHtml(d.vendedor).toUpperCase()} <span class="badge">${escapeHtml(etiquetaCorta(d.tipo_envio))}</span></div>
      </div>
    </div>

    <div class="sec">
      <div class="sec-title">Datos del Cliente</div>
      <div class="grid-cliente">
        <div class="cell"><span class="lbl">Cliente</span><span class="val">${escapeHtml(d.cliente).toUpperCase()}</span></div>
        <div class="cell"><span class="lbl">DNI / CUIT</span><span class="val">${escapeHtml(d.dni || 'N/C').toUpperCase()}</span></div>
        <div class="cell"><span class="lbl">Teléfono / WhatsApp</span><span class="val">${escapeHtml(d.telefono || 'N/C')}</span></div>
        <div class="cell"><span class="lbl">Email</span><span class="val">${escapeHtml(d.email || 'N/C')}</span></div>
      </div>
    </div>

    <div class="sec">
      <div class="sec-title">Detalle de la Encomienda / Embarque</div>
      <table class="tabla">
        <tbody>
          ${filasTabla}
        </tbody>
      </table>
    </div>

    <div class="sec">
      <div class="sec-title">Tarifas y Costos de Logística</div>
      <table class="tarifas">
        <tbody>
          ${filasTarifas}
          <tr class="subtotal"><td>Subtotal Tarifas Logísticas</td><td class="tarifa-val">${formatearUSD(subtotal)}</td></tr>
          <tr class="profit"><td>Mi profit / Gestión</td><td class="tarifa-val">${formatearUSD(profit)}</td></tr>
          <tr class="total"><td>COSTO TOTAL ESTIMADO</td><td class="tarifa-val">${formatearUSD(total)}</td></tr>
        </tbody>
      </table>
      <div class="totales">
        <div class="fila">
          <span class="lbl">Equivalente en pesos argentinos</span>
          <span class="monto">${formatearARS(Number(d.precio_ars))}</span>
        </div>
      </div>
    </div>

    ${d.nota ? `
    <div class="nota"><b>Observaciones:</b><br/>${escapeHtml(d.nota).toUpperCase()}</div>
    ` : ''}

    <div class="footer">
      <b>ESTE PRESUPUESTO TIENE UNA VALIDEZ DE 10 DÍAS CORRIDOS.</b><br />
      Cotización sujeta a cambios de tarifas aduaneras, marítimas y tipos de cambio. ${escapeHtml(DATOS_ANDESBOX.web)} - AndesBox
    </div>

    <script>window.onload = function () { setTimeout(function () { window.print(); }, 150); };</script>
  </body>
  </html>
  `;

  ventana.document.open();
  ventana.document.write(html);
  ventana.document.close();
}

// Mensaje de WhatsApp para enviar la cotización
export function construirMensajeWhatsApp(d: PresupuestoEnvioData): string {
  const servicio = etiquetaServicio(d.tipo_envio);
  const subtotal = subtotalItems(d.items);
  const profit = Number(d.profit_usd) || 0;
  const total = subtotal + profit > 0 ? subtotal + profit : Number(d.precio_usd) || 0;

  const detalleItems = (d.items || [])
    .filter((i) => i.concepto.trim() && Number(i.monto_usd) !== 0)
    .map((i) => `• ${i.concepto.trim()}: ${formatearUSD(Number(i.monto_usd))}`)
    .join('\n');

  const bultos =
    d.bultos_texto?.trim() || (Number(d.cantidad) > 1 ? textoBultos(d) : '');
  const lineasExtras = [
    bultos ? `📦 *Bultos:* ${bultos}` : '',
    d.volumen ? `📐 *Volumen:* ${d.volumen}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return (
    `*PRESUPUESTO N° ${d.numero} - ANDESBOX*\n\n` +
    `📅 *Fecha:* ${formatearFecha(d.fecha)}\n` +
    `👤 *Cliente:* ${d.cliente.toUpperCase()}\n\n` +
    `📦 *Contenido:* ${d.descripcion || '—'}\n` +
    `⚖️ *Peso:* ${d.peso_kg} Kg\n` +
    (lineasExtras ? `${lineasExtras}\n` : '') +
    `🧭 *Servicio:* ${servicio}\n` +
    `📍 *Origen:* ${d.origen}\n` +
    `🎯 *Destino:* ${d.destino}\n\n` +
    `*TARIFAS Y COSTOS*\n` +
    (detalleItems ? `${detalleItems}\n` : '') +
    `Subtotal: ${formatearUSD(subtotal)}\n` +
    `Profit / Gestión: ${formatearUSD(profit)}\n` +
    `💰 *Costo total:* ${formatearUSD(total)} (${formatearARS(Number(d.precio_ars))})\n\n` +
    `Validez: 10 días corridos.\nANDESBOX - Envíos y Logística`
  );
}
