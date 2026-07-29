"use client";
import React from 'react';

interface CalculadoraProps {
  pesoEstimado: number;
  setPesoEstimado: (p: number) => void;
  tipoProducto: 'tecnologia' | 'indumentaria' | 'general';
  setTipoProducto: (t: 'tecnologia' | 'indumentaria' | 'general') => void;
  costoEstimado: number;
  iniciarConsultaWhatsApp: () => void;
  azulModerno: string;
  estiloTab: (id: 'tecnologia' | 'indumentaria' | 'general') => any;
}

export default function CalculadoraView({ azulModerno }: CalculadoraProps) {
  return (
    <div style={{ padding: '120px 5% 40px', textAlign: 'center' }}>
      <h2>Calculadora de Envíos (Próximamente)</h2>
    </div>
  );
}