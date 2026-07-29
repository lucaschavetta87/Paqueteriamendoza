"use client";
import React from 'react';

interface InfoSidebarProps {
  setMostrarResumen: (m: boolean) => void;
  azulModerno: string;
  costoEstimado: number;
  iniciarConsultaWhatsApp: () => void;
}

export default function InfoSidebar({ setMostrarResumen, azulModerno }: InfoSidebarProps) {
  return (
    <div style={{ position: 'fixed', top: 0, right: 0, width: '300px', height: '100vh', backgroundColor: '#111', zIndex: 200, padding: '20px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
      <button onClick={() => setMostrarResumen(false)} style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>Cerrar</button>
      <h3 style={{ marginTop: '20px' }}>Dirección de tu Casillero Miami</h3>
    </div>
  );
}