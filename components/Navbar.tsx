"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  setVista: (vista: 'inicio' | 'calculadora') => void;
  azulModerno: string;
}

export default function Navbar({ setVista, azulModerno }: NavbarProps) {
  // Estado para controlar la apertura del menú tipo sanguchito
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
    // Acá podrás disparar la acción del menú o abrir tu modal en el futuro
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

        .logo-text {
          background: linear-gradient(135deg, #ffffff 40%, ${azulModerno} 100%);
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
        }

        .btn-hamburger:hover {
          background-color: rgba(255,255,255,0.15);
          border-color: ${azulModerno};
        }
        
        @media (max-width: 480px) {
          .public-nav { height: 70px !important; padding: 0 4% !important; }
          .logo-nav-left { font-size: 1.25rem !important; }
          .btn-hamburger { width: 40px !important; height: 40px !important; }
        }
      `}</style>

      <nav className="public-nav">
        {/* LOGO EN TEXTO NATIVO */}
        <div className="logo-nav-left" onClick={() => setVista('inicio')}>
          <span className="logo-text">ANDESBOX</span>
        </div>

        {/* BOTÓN TIPO SANGUCHITO (HAMBURGUESA) */}
        <button 
          className="btn-hamburger" 
          onClick={toggleMenu}
          aria-label="Menú principal"
        >
          {menuAbierto ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>
    </>
  );
}