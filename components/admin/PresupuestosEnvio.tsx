"use client";

import React, { useState } from 'react';
import { logoutAction } from '../../app/admin/login/actions';
import {
  PresupuestoEnvioData,
  generarPDFAndesBox,
  construirMensajeWhatsApp,
  formatearNumeroPresupuesto,
} from './PresupuestoPDF';

const azul = "#3b82f6";

interface Props {
  vendedorInicial: string;
}

const hoyInput = () => new Date().toISOString().slice(0, 10);

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
    medidas: '',
    origen: '',
    destino: '',
    tipo_envio: 'internacional',
    categoria: '',
    precio_usd: '',
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

  // --- Autocompletar precio USD según peso y tarifa por kg ---
  const sugerenciaUSD = () => {
    const peso = Number(form.peso) || 0;
    const tarifa = Number(form.tarifa_kg) || 0;
    return peso * tarifa;
  };

  const aplicarSugerenciaUSD = () =>
    setForm((prev) => ({ ...prev, precio_usd: String(sugerenciaUSD()) }));

  // --- Convertir USD a ARS ---
  const convertirAARS = () => {
    const usd = Number(form.precio_usd) || 0;
    const tasa = Number(form.tasa_ars) || 0;
    setForm((prev) => ({ ...prev, precio_ars: String(usd * tasa) }));
  };

  const notificar = (texto: string, ok = true) => {
    setMensaje(texto);
    setTipoMensaje(ok ? 'ok' : 'error');
    setTimeout(() => setMensaje(null), 3500);
  };

  const construirPresupuesto = (): PresupuestoEnvioData | { error: string } | null => {
    const peso = Number(form.peso);
    if (!form.fecha) return { error: 'Falta la fecha del presupuesto.' };
    if (!form.cliente.trim()) return { error: 'Falta el nombre del cliente.' };
    if (!form.origen.trim()) return { error: 'Falta el origen (desde).' };
    if (!form.destino.trim()) return { error: 'Falta el destino (hacia).' };
    if (!peso || peso <= 0) return { error: 'El peso debe ser mayor a 0 kg.' };
    if (!Number(form.precio_usd)) return { error: 'Falta el precio final de logística en USD.' };

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
      medidas: form.medidas.trim(),
      origen: form.origen.trim(),
      destino: form.destino.trim(),
      tipo_envio: form.tipo_envio as 'nacional' | 'internacional',
      categoria: form.categoria,
      precio_usd: Number(form.precio_usd),
      precio_ars: Number(form.precio_ars) || 0,
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

          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: azul, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>2. Encomienda</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '18px' }}>
            <input style={input} placeholder="Contenido / Descripción" value={form.descripcion} onChange={(e) => actualizar('descripcion', e.target.value)} />
            <input style={input} type="number" step="0.01" placeholder="Peso en kg *" value={form.peso} onChange={(e) => actualizar('peso', e.target.value)} />
            <input style={input} type="number" placeholder="Cantidad de paquetes" value={form.cantidad} onChange={(e) => actualizar('cantidad', e.target.value)} />
            <input style={input} placeholder="Medidas (alto x ancho x largo) cm" value={form.medidas} onChange={(e) => actualizar('medidas', e.target.value)} />
          </div>

          {/* TIPO DE ENVÍO */}
          <label style={label}>Tipo de Envío</label>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '18px' }}>
            <button type="button" style={botonTipo(form.tipo_envio === 'internacional')} onClick={() => actualizar('tipo_envio', 'internacional')}>
              🌎 Envío Internacional
            </button>
            <button type="button" style={botonTipo(form.tipo_envio === 'nacional')} onClick={() => actualizar('tipo_envio', 'nacional')}>
              🇦🇷 Envío Nacional
            </button>
          </div>

          {/* RUTA */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '18px' }}>
            <div>
              <label style={label}>Origen (desde) *</label>
              <input style={input} placeholder="Ej: Miami, USA / Mendoza" value={form.origen} onChange={(e) => actualizar('origen', e.target.value)} />
            </div>
            <div>
              <label style={label}>Destino (hacia) *</label>
              <input style={input} placeholder="Ej: Mendoza, Argentina / Luján de Cuyo" value={form.destino} onChange={(e) => actualizar('destino', e.target.value)} />
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

          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: azul, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>3. Precio Final de Logística</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '14px' }}>
            <div>
              <label style={label}>Precio en USD *</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input style={input} type="number" step="0.01" placeholder="0.00" value={form.precio_usd} onChange={(e) => actualizar('precio_usd', e.target.value)} />
                <button type="button" onClick={aplicarSugerenciaUSD} title="Calcular según peso y tarifa" style={{ flexShrink: 0, padding: '0 14px', borderRadius: '12px', border: `1px solid ${azul}`, backgroundColor: `${azul}25`, color: '#fff', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem' }}>
                  AUTO
                </button>
              </div>
            </div>
            <div>
              <label style={label}>Tarifa USD / kg (referencia)</label>
              <input style={input} type="number" step="0.1" placeholder="8" value={form.tarifa_kg} onChange={(e) => actualizar('tarifa_kg', e.target.value)} />
            </div>
            <div>
              <label style={label}>Equivalente en ARS</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input style={input} type="number" step="1" placeholder="0" value={form.precio_ars} onChange={(e) => actualizar('precio_ars', e.target.value)} />
                <button type="button" onClick={convertirAARS} title="Convertir USD a ARS" style={{ flexShrink: 0, padding: '0 14px', borderRadius: '12px', border: `1px solid ${azul}`, backgroundColor: `${azul}25`, color: '#fff', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem' }}>
                  USD→ARS
                </button>
              </div>
            </div>
            <div>
              <label style={label}>Tipo de cambio</label>
              <input style={input} type="number" step="1" placeholder="1300" value={form.tasa_ars} onChange={(e) => actualizar('tasa_ars', e.target.value)} />
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