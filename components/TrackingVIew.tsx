"use client";
import React, { useState } from 'react';
import ServiceItem from './ServiceItem';
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaBoxOpen, 
  FaPlane, 
  FaShieldAlt, 
  FaWarehouse,
  FaShip,
  FaFileAlt,
  FaBox,
  FaBatteryFull
} from 'react-icons/fa';

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
  
  // --- ESTADO PARA LAS FAQS ---
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);

  // --- ESTADOS INTERACTIVOS PARA EL COTIZADOR ---
  const [tipoOperacion, setTipoOperacion] = useState<'importacion' | 'exportacion'>('importacion');
  const [transporte, setTransporte] = useState<'aereo' | 'maritimo'>('aereo');
  const [tipoCarga, setTipoCarga] = useState<'paquete' | 'documento'>('paquete');
  const [contieneBaterias, setContieneBaterias] = useState<'no' | 'si'>('no');

  const toggleFaq = (index: number) => {
    setFaqAbierta(faqAbierta === index ? null : index);
  };

  const listaFaqs = [
    { q: "¿Cómo funciona el servicio de AndesBox?", a: "Te registrás con nosotros, te asignamos una dirección de casillero (Lockbox) propia en nuestro depósito de Miami, realizás tus compras online en cualquier tienda del mundo (Amazon, eBay, Apple) y las enviás a esa dirección. Nosotros las recibimos y las traemos directo a Mendoza." },
    { q: "¿Cuánto demora en llegar mi paquete a Mendoza?", a: "Una vez que tu paquete es recibido en nuestro depósito de Miami, el tiempo estimado de transporte e ingreso al país es de entre 7 y 14 días hábiles hasta nuestras oficinas en Mendoza." },
    { q: "¿Qué costo tiene el servicio?", a: "Cobramos según el peso real del paquete en kilogramos y el tipo de mercadería (si requiere gestiones aduaneras especiales). Podés usar nuestra calculadora integrada para estimar el costo exacto antes de comprar." },
    { q: "¿Qué es una prealerta y por qué debo hacerla?", a: "Prealertar consiste en avisarnos que una compra va en camino a nuestro depósito en Miami. Nos adjuntás el número de tracking de la tienda de USA y la factura de compra para acelerar los tiempos de procesamiento y aduana." }
  ];

  // --- ESTILOS AUXILIARES PARA EL COTIZADOR ---
  const estiloBotonSeleccion = (activo: boolean) => ({
    flex: 1,
    padding: '14px 10px',
    borderRadius: '16px',
    border: `1px solid ${activo ? azulModerno : 'rgba(255,255,255,0.12)'}`,
    backgroundColor: activo ? `${azulModerno}25` : 'rgba(255,255,255,0.03)',
    color: '#fff',
    fontWeight: activo ? ('800' as const) : ('500' as const),
    fontSize: '0.88rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.25s ease',
    boxShadow: activo ? `0 0 15px ${azulModerno}30` : 'none'
  });

  const estiloInput = {
    padding: '15px',
    borderRadius: '15px',
    border: '1px solid rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(255,255,255,0.06)',
    color: '#fff',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
    fontSize: '0.9rem'
  };

  const estiloLabel = {
    fontSize: '0.8rem',
    fontWeight: '700' as const,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '6px',
    display: 'block',
    letterSpacing: '0.5px',
    textTransform: 'uppercase' as const
  };

  return (
    <>
      <section style={{ padding: '140px 5% 40px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ fontSize: 'clamp(2.2rem, 8vw, 4.2rem)', fontWeight: '900', letterSpacing: '-1.5px', lineHeight: '1.15', maxWidth: '900px' }}>
          <h1 style={{ margin: 0, color: '#fff', fontSize: 'inherit', fontWeight: 'inherit' }}>
            Cruzamos fronteras 
          </h1>
          <span style={{ 
            color: azulModerno, 
            display: 'block', 
            background: `linear-gradient(135deg, #ffffff 0%, ${azulModerno} 100%)`, 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>
            Por vos
          </span>
        </div>

        <p style={{ marginTop: '20px', color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', maxWidth: '600px', fontWeight: '400' }}>
          Traé tecnología, ropa y repuestos de cualquier parte del mundo de forma rápida, segura y al mejor costo.
        </p>
        
        <h2 style={{ fontSize: '1.1rem', fontWeight: '800', letterSpacing: '4px', marginTop: '60px', marginBottom: '40px', opacity: 0.8, color: '#fff', textTransform: 'uppercase' }}>
          BENEFICIOS ANDESBOX
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', width: '100%', maxWidth: '1300px' }}>
          <ServiceItem title="Asesoramiento Personalizado" icon="📦" desc="Contanos tu proyecto y te damos el mejor asesoramiento." />
          <ServiceItem title="Envíos Aéreos Semanales" icon="✈️" desc="Salidas constantes para garantizar que tus paquetes lleguen en tiempo récord." />
          <ServiceItem title="Gestión Aduanera Completa" icon="📑" desc="Nos encargamos de todos los trámites de importación. Te olvidás de tramites aduaneros." />
          <ServiceItem title="Seguridad Garantizada" icon="🔒" desc="Monitoreo constante de tu carga desde que llega a Miami hasta que entra a Mendoza." />
          <ServiceItem title="Tarifas Claras por KG" icon="⚖️" desc="Pagás exactamente por lo que pesa tu paquete. Sin sorpresas ni cargos ocultos." />
          <ServiceItem title="Retiro Local o Envío" icon="📍" desc="Retirá en nuestra sucursal de Mendoza o coordinamos el envío a cualquier punto del país." />
        </div>
      </section>

      {/* SECCIÓN DE FORMULARIOS */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', padding: '40px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* RASTREADOR DE PAQUETES (TRACKING INTERNACIONAL) */}
        <div style={{ width: '100%', maxWidth: '750px', backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', borderRadius: '35px', padding: 'clamp(20px, 5vw, 40px)', border: `1px solid rgba(255, 255, 255, 0.1)`, boxSizing: 'border-box' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '900', marginBottom: '20px', textAlign: 'center' }}>Rastreá tu Envío</h2>
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

        {/* COTIZADOR DINÁMICO DE ENVÍOS */}
        <div style={{
          width: '100%',
          maxWidth: '750px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '35px',
          padding: 'clamp(20px, 5vw, 40px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxSizing: 'border-box'
        }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '900', marginBottom: '8px', textAlign: 'center' }}>
            Cotizá tu <span style={{ color: azulModerno }}>Envío</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textAlign: 'center', marginBottom: '30px' }}>
            Configurá los datos de tu carga para recibir un presupuesto exacto.
          </p>

          <form action="https://formspree.io/f/xdayokaj" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            
            {/* CAMPOS OCULTOS PARA RECIBIR LA INFORMACIÓN SELECCIONADA EN FORMSPREE */}
            <input type="hidden" name="Tipo_Operacion" value={tipoOperacion} />
            <input type="hidden" name="Medio_Transporte" value={transporte} />
            <input type="hidden" name="Tipo_Carga" value={tipoCarga} />
            {tipoCarga === 'paquete' && <input type="hidden" name="Contiene_Baterias" value={contieneBaterias} />}

            {/* PASO 1: IMPORTACIÓN O EXPORTACIÓN */}
            <div>
              <label style={estiloLabel}>1. Sentido de la Operación</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  style={estiloBotonSeleccion(tipoOperacion === 'importacion')}
                  onClick={() => setTipoOperacion('importacion')}
                >
                  📥 Importación (Traer a ARG)
                </button>
                <button
                  type="button"
                  style={estiloBotonSeleccion(tipoOperacion === 'exportacion')}
                  onClick={() => setTipoOperacion('exportacion')}
                >
                  📤 Exportación (Enviar al exterior)
                </button>
              </div>
            </div>

            {/* PASO 2: MEDIO DE TRANSPORTE Y RUTA */}
            <div>
              <label style={estiloLabel}>2. Vía de Transporte y Ubicación</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                <button
                  type="button"
                  style={estiloBotonSeleccion(transporte === 'aereo')}
                  onClick={() => setTransporte('aereo')}
                >
                  <FaPlane size={16} /> Aéreo Express
                </button>
                <button
                  type="button"
                  style={estiloBotonSeleccion(transporte === 'maritimo')}
                  onClick={() => setTransporte('maritimo')}
                >
                  <FaShip size={16} /> Carga Marítima
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <input 
                  type="text" 
                  name="origen" 
                  placeholder={tipoOperacion === 'importacion' ? "Origen (Ej: Miami, China, Madrid)" : "Origen (Ej: Mendoza, Argentina)"} 
                  required 
                  style={estiloInput} 
                />
                <input 
                  type="text" 
                  name="codigo_postal_destino" 
                  placeholder="Código Postal de Destino" 
                  required 
                  style={estiloInput} 
                />
              </div>
            </div>

            {/* PASO 3: TIPO DE ENVIÓ (DOCUMENTACIÓN VS PAQUETE) */}
            <div>
              <label style={estiloLabel}>3. ¿Qué vas a enviar?</label>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <button
                  type="button"
                  style={estiloBotonSeleccion(tipoCarga === 'documento')}
                  onClick={() => setTipoCarga('documento')}
                >
                  <FaFileAlt size={16} /> Documentación / Sobre
                </button>
                <button
                  type="button"
                  style={estiloBotonSeleccion(tipoCarga === 'paquete')}
                  onClick={() => setTipoCarga('paquete')}
                >
                  <FaBox size={16} /> Paquete / Mercadería
                </button>
              </div>

              {/* CAMPOS CONDICIONALES PARA DOCUMENTOS */}
              {tipoCarga === 'documento' ? (
                <div>
                  <input 
                    type="text" 
                    name="peso_documento" 
                    placeholder="Peso estimado del sobre (Ej: 200g, 0.5 kg)" 
                    required 
                    style={estiloInput} 
                  />
                </div>
              ) : (
                /* CAMPOS CONDICIONALES PARA PAQUETES Y MERCADERÍA */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  
                  {/* CHECK DE BATERÍAS */}
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', marginBottom: '8px', display: 'block' }}>
                      ⚡ ¿El paquete contiene baterías de Litio o equipos electrónicos con batería integrada?
                    </span>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        type="button"
                        style={estiloBotonSeleccion(contieneBaterias === 'no')}
                        onClick={() => setContieneBaterias('no')}
                      >
                        No contiene baterías
                      </button>
                      <button
                        type="button"
                        style={estiloBotonSeleccion(contieneBaterias === 'si')}
                        onClick={() => setContieneBaterias('si')}
                      >
                        <FaBatteryFull color="#f59e0b" size={14} /> Sí, contiene batería
                      </button>
                    </div>
                  </div>

                  {/* CATEGORÍA DE PRODUCTO */}
                  <select 
                    name="categoria_mercaderia" 
                    defaultValue=""
                    required
                    style={{ ...estiloInput, cursor: 'pointer' }}
                  >
                    <option value="" disabled style={{ background: '#0f172a' }}>Tipo de mercadería (Seleccioná una categoría)</option>
                    <option value="Tecnologia" style={{ background: '#0f172a' }}>💻 Electrónica / Celulares / Componentes</option>
                    <option value="Indumentaria" style={{ background: '#0f172a' }}>👟 Ropa / Zapatillas / Calzado</option>
                    <option value="Repuestos" style={{ background: '#0f172a' }}>⚙️ Repuestos automotores o industriales</option>
                    <option value="Cosmetica/Suplementos" style={{ background: '#0f172a' }}>🧴 Cosmética / Suplementos permitidos</option>
                    <option value="CargaGeneral" style={{ background: '#0f172a' }}>📦 Carga General / Otros</option>
                  </select>

                  {/* MEDIDAS Y PESO */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                    <input type="number" step="0.1" name="peso_kg" placeholder="Peso (Kg)" required style={estiloInput} />
                    <input type="number" name="alto_cm" placeholder="Alto (cm)" required style={estiloInput} />
                    <input type="number" name="ancho_cm" placeholder="Ancho (cm)" required style={estiloInput} />
                    <input type="number" name="largo_cm" placeholder="Largo (cm)" required style={estiloInput} />
                  </div>
                </div>
              )}
            </div>

            {/* PASO 4: DATOS DEL CLIENTE */}
            <div>
              <label style={estiloLabel}>4. Datos de Contacto</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <input type="text" name="nombre_cliente" placeholder="Tu Nombre y Apellido" required style={estiloInput} />
                <input type="text" name="telefono_whatsapp" inputMode="tel" placeholder="WhatsApp (Ej: +54 9 261...)" required style={estiloInput} />
              </div>
            </div>

            {/* NOTA ACLARATORIA */}
            <textarea 
              name="observaciones_adicionales" 
              placeholder="¿Algún detalle o consulta adicional? (Ej: Valor aproximado en USD de la mercadería)" 
              rows={2} 
              style={{ ...estiloInput, resize: 'none' }}
            ></textarea>

            {/* BOTÓN SUBMIT */}
            <button 
              type="submit" 
              style={{ 
                width: '100%', 
                backgroundColor: azulModerno, 
                color: '#fff', 
                padding: '18px', 
                borderRadius: '16px', 
                fontWeight: '900', 
                cursor: 'pointer', 
                border: 'none', 
                fontSize: '1rem', 
                letterSpacing: '1px',
                transition: 'all 0.3s ease',
                boxShadow: `0 8px 20px ${azulModerno}40`
              }}
            >
              SOLICITAR COTIZACIÓN
            </button>

          </form>
        </div>

        {/* ACORDEÓN DE PREGUNTAS FRECUENTES (FAQs) */}
        <div style={{ width: '100%', maxWidth: '750px', marginTop: '20px' }}>
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