"use client";

// Datos de cabecera de la empresa (editar cuando tengas los datos definitivos)
export const DATOS_ANDESBOX = {
  cuit: 'CUIT: 20-00000000-0',
  direccion: 'Salta 1161, Ciudad, Mendoza',
  telefono: '+54 9 261 685-2139',
  web: 'www.andesbox.com.ar',
};

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
  medidas: string;
  origen: string;
  destino: string;
  tipo_envio: string; // 'nacional' | 'internacional'
  categoria: string;
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

// Genera el PDF A4 profesional y abre el diálogo de impresión
export function generarPDFAndesBox(d: PresupuestoEnvioData) {
  const ventana = window.open('', '_blank', 'width=900,height=1100');
  if (!ventana) return;

  const tipo = d.tipo_envio === 'nacional' ? 'ENVÍO NACIONAL' : 'ENVÍO INTERNACIONAL';

  const detalleFilas: { label: string; valor: string }[] = [
    { label: 'CONTENIDO DE LA ENCOMIENDA', valor: d.descripcion },
    { label: 'PESO TOTAL', valor: `${Number(d.peso_kg || 0).toLocaleString('es-AR')} Kg` },
    { label: 'CANTIDAD DE PAQUETES', valor: String(d.cantidad || 1) },
  ];
  if (d.medidas) detalleFilas.push({ label: 'MEDIDAS (ALTO x ANCHO x LARGO)', valor: d.medidas });
  detalleFilas.push(
    { label: 'SERVICIO', valor: tipo },
    { label: 'ORIGEN (DESDE)', valor: d.origen },
    { label: 'DESTINO (HACIA)', valor: d.destino }
  );
  if (d.categoria) detalleFilas.push({ label: 'CATEGORÍA', valor: d.categoria });

  const filasTabla = detalleFilas
    .map((f) => `<tr><td class="lbl">${escapeHtml(f.label)}</td><td class="val">${escapeHtml(f.valor).toUpperCase()}</td></tr>`)
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
      .tabla .lbl { font-size: 9px; color: #64748b; letter-spacing: 1px; text-transform: uppercase; font-weight: 700; }
      .tabla .val { font-weight: 700; color: #0f172a; text-transform: uppercase; }
      .totales { margin-top: 14px; border: 2px solid #0f172a; }
      .totales .fila { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; }
      .totales .fila.total { background: #0f172a; color: #fff; font-size: 16px; font-weight: 900; }
      .totales .fila.total .monto { color: #fff; }
      .totales .lbl { font-weight: 700; font-size: 12px; }
      .totales .monto { font-weight: 900; font-size: 13px; text-align: right; }
      .totales .ars-row { background: #f1f5f9; }
      .totales .ars-row .monto { color: #0f172a; }
      .nota { margin-top: 12px; border: 1px solid #94a3b8; padding: 10px 12px; font-size: 11.5px; white-space: pre-line; }
      .nota b { font-size: 9px; letter-spacing: 1px; text-transform: uppercase; color: #475569; }
      .firma { margin-top: 26px; display: flex; justify-content: space-between; align-items: flex-end; }
      .firma .sig { text-align: center; font-size: 11px; color: #334155; }
      .firma .sig .linea { border-top: 1px solid #111; width: 170px; margin-bottom: 5px; }
      .footer { margin-top: 18px; border-top: 1px solid #94a3b8; padding-top: 8px; text-align: center; font-size: 10px; color: #475569; }
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
        <div><b>Nº:</b> ${escapeHtml(d.numero)}&nbsp;&nbsp;|&nbsp;&nbsp;<b>Fecha:</b> ${escapeHtml(formatearFecha(d.fecha))}</div>
        <div><b>Vendedor:</b> ${escapeHtml(d.vendedor).toUpperCase()} <span class="badge">${tipo}</span></div>
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
      <div class="sec-title">Detalle de la Encomienda</div>
      <table class="tabla">
        <thead>
          <tr><th style="width:40%;">Campo</th><th>Información</th></tr>
        </thead>
        <tbody>
          ${filasTabla}
        </tbody>
      </table>
    </div>

    <div class="sec">
      <div class="sec-title">Costos de Logística</div>
      <div class="totales">
        <div class="fila"><span class="lbl">LOGÍSTICA + GESTIÓN ADUANERA (${escapeHtml(tipo)})</span><span class="monto">${formatearUSD(Number(d.precio_usd))}</span></div>
        <div class="fila ars-row"><span class="lbl">EQUIVALENTE EN PESOS ARGENTINOS</span><span class="monto">${formatearARS(Number(d.precio_ars))}</span></div>
        <div class="fila total"><span>TOTAL DE LOGÍSTICA</span><span class="monto">${formatearUSD(Number(d.precio_usd))} / ${formatearARS(Number(d.precio_ars))}</span></div>
      </div>
    </div>

    ${d.nota ? `
    <div class="nota"><b>Observaciones:</b><br/>${escapeHtml(d.nota).toUpperCase()}</div>
    ` : ''}

    <div class="firma">
      <div class="sig">
        <div class="linea"></div>
        ${escapeHtml(d.vendedor).toUpperCase()}<br />Vendedor / AndesBox
      </div>
      <div class="sig">
        <div class="linea"></div>
        ${escapeHtml(d.cliente).toUpperCase()}<br />Conforme Cliente
      </div>
    </div>

    <div class="footer">
      <b>ESTE PRESUPUESTO TIENE UNA VALIDEZ DE 10 DÍAS CORRIDOS.</b><br />
      Cotización sujeta a cambios de tarifas aduaneras y tipos de cambio. ${escapeHtml(DATOS_ANDESBOX.web)} - AndesBox
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
  const tipo = d.tipo_envio === 'nacional' ? 'ENVÍO NACIONAL' : 'ENVÍO INTERNACIONAL';
  return (
    `*PRESUPUESTO N° ${d.numero} - ANDESBOX*\n\n` +
    `📅 *Fecha:* ${formatearFecha(d.fecha)}\n` +
    `👤 *Cliente:* ${d.cliente.toUpperCase()}\n\n` +
    `📦 *Contenido:* ${d.descripcion}\n` +
    `⚖️ *Peso:* ${d.peso_kg} Kg\n` +
    `🧭 *Tipo:* ${tipo}\n` +
    `📍 *Origen:* ${d.origen}\n` +
    `🎯 *Destino:* ${d.destino}\n\n` +
    `💰 *Total logística:* ${formatearUSD(Number(d.precio_usd))} (${formatearARS(Number(d.precio_ars))})\n\n` +
    `Validez: 10 días corridos.\nANDESBOX - Envíos y Logística`
  );
}