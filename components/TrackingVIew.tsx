"use client";
import React, { useState } from 'react';
import ServiceItem from './ServiceItem';
import { FaChevronDown, FaChevronUp, FaBoxOpen, FaPlane, FaShieldAlt, FaWarehouse } from 'react-icons/fa';

interface PaqueteData {
  tracking_id: string;
  descripcion: string;
  estado_envio: string; // Ej: "En depósito Miami", "En Aduana", "Listo para retirar"
  peso_kg: number;
  fecha_actualizacion: string;
}

interface TrackingViewProps {
  trackingBusqueda: string;
  setTrackingBusqueda: (v: string) => void;
  telBusqueda: string;
  setTelBusqueda: (v: string) => void;
  buscarTracking: () => void;
  cargando: boolean;
  errorBusqueda: string;
  paquete: PaqueteData | null;
  azulModerno: string;
}

export default function TrackingView({ 
  trackingBusqueda, setTrackingBusqueda, telBusqueda, setTelBusqueda, 
  buscarTracking, cargando, errorBusqueda, paquete, azulModerno 
}: TrackingViewProps) {
  
  // Estado para las FAQs
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);

  // Estado para el selector de tipo de producto en Prealerta
  const [tipoEnvio, setTipoEnvio] = useState('');

  const toggleFaq = (index: number) => {
    setFaqAbierta(faqAbierta === index ? null : index);
  };

  const listaFaqs = [
    { q: "¿Cómo funciona el servicio de AndesBox?", a: "Te registrás con nosotros, te asignamos una dirección de casillero (Lockbox) propia en nuestro depósito de Miami, realizás tus compras online en cualquier tienda del mundo (Amazon, eBay, Apple) y las enviás a esa dirección. Nosotros las recibimos y las traemos directo a Mendoza." },
    { q: "¿Cuánto demora en llegar mi paquete a Mendoza?", a: "Una vez que tu paquete es recibido en nuestro depósito de Miami, el tiempo estimado de transporte e ingreso al país es de entre 7 y 14 días hábiles hasta nuestras oficinas en Mendoza." },
    { q: "¿Qué costo tiene el servicio?", a: "Cobramos según el peso real del paquete en kilogramos y el tipo de mercadería (si requiere gestiones aduaneras especiales). Podés usar nuestra calculadora integrada para estimar el costo exacto antes de comprar." },
    { q: "¿Qué es una prealerta y por qué debo hacerla?", a: "Prealertar consiste en avisarnos que una compra va en camino a nuestro depósito en Miami. Nos adjuntás el número de tracking de la tienda de USA y la factura de compra para acelerar los tiempos de procesamiento y aduana." }
  ];

  return (
    <>
      <section style={{ padding: '140px 5% 40px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div style={{ fontSize: 'clamp(2.2rem, 8vw, 4.2rem)', fontWeight: '900', letterSpacing: '-1.5px', lineHeight: '1.15', maxWidth: '900px' }}>
    <h1 style={{ margin: 0, color: '#fff', fontSize: 'inherit', fontWeight: 'inherit' }}>
      Tus Compras del Mundo
    </h1>
    <span style={{ 
      color: azulModerno, 
      display: 'block', 
      background: `linear-gradient(135deg, #ffffff 0%, ${azulModerno} 100%)`, 
      WebkitBackgroundClip: 'text', 
      WebkitTextFillColor: 'transparent' 
    }}>
      Directo a Mendoza
    </span>
  </div>

  <p style={{ marginTop: '20px', color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', maxWidth: '600px', fontWeight: '400' }}>
    Traé tecnología, ropa y repuestos desde Miami y el mundo de forma rápida, segura y al mejor costo.
  </p>
  
  <h2 style={{ fontSize: '1.1rem', fontWeight: '800', letterSpacing: '4px', marginTop: '60px', marginBottom: '40px', opacity: 0.8, color: '#fff', textTransform: 'uppercase' }}>
    BENEFICIOS ANDESBOX
  </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', width: '100%', maxWidth: '1300px' }}>
          <ServiceItem title="Depósito Propio en USA" icon="🇺🇸" desc="Dirección física y segura en Miami para centralizar todas tus compras globales." />
          <ServiceItem title="Envíos Aéreos Semanales" icon="✈️" desc="Salidas constantes para garantizar que tus paquetes lleguen en tiempo récord." />
          <ServiceItem title="Gestión Aduanera Completa" icon="📑" desc="Nos encargamos de todos los trámites de importación. Te olvidás del puerta a puerta." />
          <ServiceItem title="Seguridad Garantizada" icon="🔒" desc="Monitoreo constante de tu carga desde que llega a Miami hasta que entra a Mendoza." />
          <ServiceItem title="Tarifas Claras por KG" icon="⚖️" desc="Pagás exactamente por lo que pesa tu paquete. Sin sorpresas ni cargos ocultos." />
          <ServiceItem title="Retiro Local o Envío" icon="📍" desc="Retirá en nuestra sucursal de Mendoza o coordinamos el envío a cualquier punto del país." />
        </div>
      </section>

      {/* SECCIÓN DE FORMULARIOS */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', padding: '40px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* RASTREADOR DE PAQUETES (TRACKING INTERNACIONAL) */}
        <div style={{ width: '100%', maxWidth: '700px', backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', borderRadius: '35px', padding: 'clamp(20px, 5vw, 40px)', border: `1px solid rgba(255, 255, 255, 0.1)`, boxSizing: 'border-box' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '900', marginBottom: '20px', textAlign: 'center' }}>Rastreá tu <span style={{ color: azulModerno }}>Envío</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '15px' }}>
            <input type="text" placeholder="Nro de Tracking (Ej: AB-8492)" value={trackingBusqueda} onChange={(e) => setTrackingBusqueda(e.target.value)} style={{ padding: '15px', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
            <input type="text" inputMode="tel" placeholder="Teléfono Registrado" value={telBusqueda} onChange={(e) => setTelBusqueda(e.target.value)} style={{ padding: '15px', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
          </div>
          <button onClick={buscarTracking} style={{ width: '100%', backgroundColor: azulModerno, color: '#fff', padding: '18px', borderRadius: '15px', fontWeight: '900', cursor: 'pointer', border: 'none', fontSize: '1rem', transition: 'all 0.3s' }}>{cargando ? 'LOCALIZANDO...' : 'BUSCAR PAQUETE'}</button>
          
          {errorBusqueda && <p style={{ color: '#ff4b4b', textAlign: 'center', marginTop: '15px', fontSize: '0.9rem' }}>{errorBusqueda}</p>}
          
          {paquete && (
            <div style={{ marginTop: '25px', padding: '20px', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ textAlign: 'center', padding: '15px', borderRadius: '15px', backgroundColor: paquete.estado_envio.toLowerCase().includes('listo') ? '#10b981' : azulModerno, marginBottom: '15px' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '900' }}>{paquete.estado_envio.toUpperCase()}</div>
              </div>
              <p style={{ textAlign: 'center', opacity: 0.9, fontSize: '1rem', fontWeight: '600' }}>{paquete.descripcion}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', fontSize: '0.85rem', opacity: 0.7, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px' }}>
                <span>Peso: {paquete.peso_kg} Kg</span>
                <span>Actualizado: {paquete.fecha_actualizacion}</span>
              </div>
            </div>
          )}
        </div>

        {/* FORMULARIO DE PREALERTA (REEMPLAZA PRESUPUESTO ONLINE) */}
        <div style={{ width: '100%', maxWidth: '700px', backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', borderRadius: '35px', padding: 'clamp(20px, 5vw, 40px)', border: '1px solid rgba(255, 255, 255, 0.1)', boxSizing: 'border-box' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '900', marginBottom: '20px', textAlign: 'center' }}>Prealertar <span style={{ color: azulModerno }}>Compra</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textAlign: 'center', marginBottom: '20px' }}>¿Ya compraste afuera? Avisanos adjuntando el tracking que te dio la tienda.</p>
          <form action="https://formspree.io/f/xdayokaj" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <input type="text" name="nombre" placeholder="Tu Nombre y Apellido" required style={{ padding: '15px', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
              <input type="text" name="telefono" inputMode="tel" placeholder="WhatsApp de Contacto" required style={{ padding: '15px', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <input type="text" name="tracking_usa" placeholder="Tracking de USA (UPS, FedEx, USPS)" required style={{ padding: '15px', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
              <input type="text" name="tienda_origen" placeholder="¿Dónde compraste? (Amazon, eBay...)" required style={{ padding: '15px', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
            </div>

            <select 
              name="categoria_producto" 
              value={tipoEnvio}
              onChange={(e) => setTipoEnvio(e.target.value)}
              required
              style={{ padding: '15px', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', outline: 'none', width: '100%', boxSizing: 'border-box', cursor: 'pointer' }}
            >
              <option value="" disabled style={{ background: '#0f172a' }}>Tipo de mercadería (Seleccioná una categoría)</option>
              <option value="Tecnología / Electrónica" style={{ background: '#0f172a' }}>💻 Tecnología / Componentes / Celulares</option>
              <option value="Indumentaria y Calzado" style={{ background: '#0f172a' }}>👟 Ropa / Zapatillas / Accesorios de moda</option>
              <option value="Repuestos" style={{ background: '#0f172a' }}>⚙️ Repuestos (Autos, motos, herramientas)</option>
              <option value="Coleccionables / Juguetes" style={{ background: '#0f172a' }}>🧸 Figuras de acción / Libros / Coleccionables</option>
              <option value="Carga General" style={{ background: '#0f172a' }}>📦 Productos generales / Cosmética permitida</option>
            </select>

            <textarea 
              name="descripcion_paquete" 
              placeholder="Describí brevemente qué contiene el paquete (Ej: 1 campera y 2 remeras) junto al valor aproximado en USD." 
              required
              rows={3} 
              style={{ padding: '15px', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', resize: 'none', outline: 'none', width: '100%', boxSizing: 'border-box' }}
            ></textarea>

            <button type="submit" style={{ width: '100%', backgroundColor: azulModerno, color: '#fff', padding: '18px', borderRadius: '15px', fontWeight: '900', cursor: 'pointer', border: 'none', fontSize: '1rem', transition: 'all 0.3s' }}>REGISTRAR PREALERTA</button>
          </form>
        </div>

        {/* ACORDEÓN DE PREGUNTAS FRECUENTES (FAQs) */}
        <div style={{ width: '100%', maxWidth: '700px', marginTop: '20px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', fontWeight: '900', marginBottom: '25px', textAlign: 'center' }}>Preguntas <span style={{ color: azulModerno }}>Frecuentes</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {listaFaqs.map((faq, idx) => {
              const isOpen = faqAbierta === idx;
              return (
                <div 
                  key={idx} 
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s' }}
                >
                  <button 
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    style={{ width: '100%', backgroundColor: 'transparent', border: 'none', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left', color: '#fff', fontSize: '0.95rem', fontWeight: '700' }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <FaChevronUp color={azulModerno} /> : <FaChevronDown opacity={0.5} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 20px 20px 20px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.5', animation: 'fadeIn 0.2s ease-out' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
}