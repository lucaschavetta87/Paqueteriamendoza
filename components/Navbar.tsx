"use client";
import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Globe, 
  MessageSquare 
} from 'lucide-react';

interface NavbarProps {
  setVista: (vista: 'inicio' | 'calculadora') => void;
  azulModerno: string;
}

export default function Navbar({ setVista, azulModerno }: NavbarProps) {
  // Estado para controlar la apertura del menú tipo sanguchito
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <>
      <style>{`
        .public-nav {
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          padding: 0 5%; 
          background-color: rgba(0,0,0,0.6); 
          backdrop-filter: blur(20px); 
          position: fixed; 
          top: 0; 
          left: 0;
          width: 100%;
          z-index: 100; 
          border-bottom: 1px solid rgba(255,255,255,0.08); 
          height: 80px; 
          box-sizing: border-box;
        }
        
        .logo-nav-left { 
          display: flex; 
          align-items: center; 
          cursor: pointer; 
          height: 100%;
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: -0.5px;
          user-select: none;
        }

        /* --- CLASE DEGRADADA PARA LOGO Y TITULOS --- */
        .logo-text {
          background: linear-gradient(135deg, #ffffff 30%, ${azulModerno} 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .btn-hamburger {
          background-color: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          width: 45px;
          height: 45px;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 101;
        }

        .btn-hamburger:hover {
          background-color: rgba(255,255,255,0.15);
          border-color: ${azulModerno};
        }
        
        @media (max-width: 480px) {
          .public-nav { height: 70px !important; padding: 0 4% !important; }
          .logo-nav-left { font-size: 1.25rem !important; }
          .btn-hamburger { width: 40px !important; height: 40px !important; }
          .sidebar-menu { max-width: 310px !important; padding: 30px 20px !important; }
        }

        /* --- ESTILOS DEL MENÚ DESPLEGABLE LATERAL --- */
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          z-index: 150;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .sidebar-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }

        .sidebar-menu {
          position: fixed;
          top: 0;
          right: -380px;
          width: 100%;
          max-width: 380px;
          height: 100vh;
          background-color: rgba(10, 15, 26, 0.95);
          backdrop-filter: blur(25px);
          border-left: 1px solid rgba(255, 255, 255, 0.12);
          z-index: 160;
          padding: 40px 30px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -10px 0 30px rgba(0,0,0,0.8);
          overflow-y: auto;
        }

        .sidebar-menu.active {
          right: 0;
        }
      `}</style>

      <nav className="public-nav">
        {/* LOGO EN TEXTO NATIVO DEGRADADO */}
        <div className="logo-nav-left" onClick={() => { setVista('inicio'); setMenuAbierto(false); }}>
          <span className="logo-text">ANDESBOX</span>
        </div>

        {/* BOTÓN TIPO SANGUCHITO (HAMBURGUESA) */}
        <button 
          className="btn-hamburger" 
          onClick={toggleMenu}
          aria-label="Menú principal"
        >
          {menuAbierto ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* OVERLAY OSCURO DETRÁS DEL MENÚ */}
      <div 
        className={`sidebar-overlay ${menuAbierto ? 'active' : ''}`} 
        onClick={toggleMenu}
      />

      {/* MENÚ LATERAL DESPLEGABLE */}
      <aside className={`sidebar-menu ${menuAbierto ? 'active' : ''}`}>
        <div>
          {/* ENCABEZADO */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
            <span style={{ fontSize: '1.3rem', fontWeight: '900', letterSpacing: '0.5px' }}>
              <span className="logo-text">ANDESBOX</span>
            </span>
            <button 
              onClick={toggleMenu} 
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', opacity: 0.7 }}
            >
              <X size={18} />
            </button>
          </div>

          {/* SOBRE NOSOTROS (DIFUMINADO/DEGRADADO) */}
          <div style={{ marginBottom: '35px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '900', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe size={16} color={azulModerno} /> 
              <span className="logo-text">Sobre Nosotros</span>
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.6', margin: 0 }}>
              Somos tu nexo logístico en Mendoza para compras e importaciones internacionales. Nos encargamos del transporte aéreo y marítimo, la gestión aduanera y el seguimiento punto a punto para que tus paquetes lleguen seguros y a tiempo.
            </p>
          </div>

          {/* CONTACTANOS (DIFUMINADO/DEGRADADO) */}
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '900', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={15} color={azulModerno} /> 
              <span className="logo-text">Contactanos</span>
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* TELÉFONO / WHATSAPP */}
              <a 
                href="https://wa.me/5492616852139" 
                target="_blank" 
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#fff', backgroundColor: 'rgba(255,255,255,0.05)', padding: '12px 15px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s' }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#10b98125', color: '#10b981', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <MessageSquare size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', display: 'block' }}>Atención al Cliente</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: '700' }}>+54 9 261 685-2139</span>
                </div>
              </a>

              {/* UBICACIÓN REAL */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', backgroundColor: 'rgba(255,255,255,0.05)', padding: '12px 15px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: `${azulModerno}25`, color: azulModerno, display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                  <MapPin size={16} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', display: 'block' }}>Oficina Central</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: '700', lineHeight: '1.4' }}>Salta 1161, Ciudad, Mendoza</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* PIE DEL MENÚ */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', marginTop: '20px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
            © 2026 AndesBox - Envíos Internacionales
          </span>
        </div>
      </aside>
    </>
  );
}