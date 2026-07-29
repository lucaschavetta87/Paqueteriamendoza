"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { supabase } from '../lib/supabase';
import WhatsAppChat from '../components/WhatsAppChat';
import { CheckCircle } from 'lucide-react';

// Componentes modulares adaptados a AndesBox
import Navbar from '../components/Navbar';
import TrackingView from '../components/TrackingVIew';
import CalculadoraView from '../components/CalculadoraView'; 
import InfoSidebar from '../components/InfoSidebar'; 

interface PaqueteData {
  tracking_id: string;
  descripcion: string;
  estado_envio: string; // Ej: "En depósito Miami", "En aduana", "Listo para retirar"
  peso_kg: number;
  fecha_actualizacion: string;
}

export default function WebAndesBox() {
  const azulModerno = "#3b82f6"; // Mantenemos tu estética minimalista y moderna

  // --- ESTADOS DE NAVEGACIÓN ---
  const [vista, setVista] = useState<'inicio' | 'calculadora'>('inicio');

  // --- ESTADOS DE RASTREO (TRACKING) ---
  const [trackingBusqueda, setTrackingBusqueda] = useState('');
  const [telBusqueda, setTelBusqueda] = useState('');
  const [paquete, setPaquete] = useState<PaqueteData | null>(null);
  const [cargandoTracking, setCargandoTracking] = useState(false);
  const [errorBusqueda, setErrorBusqueda] = useState('');

  // --- ESTADOS DE LA CALCULADORA DE ENVÍOS ---
  const [pesoEstimado, setPesoEstimado] = useState<number>(1);
  const [tipoProducto, setTipoProducto] = useState<'tecnologia' | 'indumentaria' | 'general'>('general');
  const [mostrarResumen, setMostrarResumen] = useState(false);
  const [notificacion, setNotificacion] = useState<string | null>(null);

  // --- TRANSICIÓN DE FONDOS POR SCROLL ---
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculamos la opacidad progresiva del segundo fondo según la altura del scroll
  const opacidadMapa = Math.min(1, Math.max(0, (scrollY - 200) / 500));

  // --- COTIZADOR EN TIEMPO REAL ---
  const costoEstimado = useMemo(() => {
    const tarifaBasePorKg = 15;
    let multiplicador = 1;
    
    if (tipoProducto === 'tecnologia') multiplicador = 1.3;
    if (tipoProducto === 'indumentaria') multiplicador = 1.1;

    return pesoEstimado * tarifaBasePorKg * multiplicador;
  }, [pesoEstimado, tipoProducto]);

  // --- BUSCAR PAQUETE EN SUPABASE ---
  const buscarTracking = async () => {
    if (!trackingBusqueda || !telBusqueda) {
      return setErrorBusqueda('Por favor, ingresá Nro. de Tracking y Teléfono registrado.');
    }
    setCargandoTracking(true); 
    setErrorBusqueda(''); 
    setPaquete(null);
    
    try {
      const { data, error } = await supabase
        .from('paquetes')
        .select('tracking_id, descripcion, estado_envio, peso_kg, fecha_actualizacion')
        .eq('telefono_cliente', telBusqueda.trim())
        .eq('tracking_id', trackingBusqueda.trim())
        .maybeSingle();

      if (error || !data) {
        setErrorBusqueda('No encontramos ningún paquete con esos datos de envío.');
      } else {
        setPaquete(data as PaqueteData);
        setNotificacion("Paquete localizado con éxito");
      }
    } catch (err) { 
      setErrorBusqueda('Error de conexión con el servidor de AndesBox.'); 
    }
    setCargandoTracking(false);
  };

  useEffect(() => {
    if (notificacion) {
      const timer = setTimeout(() => setNotificacion(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [notificacion]);

  // --- CONSULTA POR WHATSAPP ---
  const iniciarConsultaWhatsApp = () => {
    let mensaje = `Hola AndesBox! Quiero cotizar un envío:\n\n`;
    mensaje += `- *Tipo de producto:* ${tipoProducto.toUpperCase()}\n`;
    mensaje += `- *Peso estimado:* ${pesoEstimado} kg\n`;
    mensaje += `- *Costo aproximado del flete:* USD ${costoEstimado.toFixed(2)}\n\n`;
    mensaje += `¿Me podrían indicar los pasos para realizar importaciones?`;
    
    window.open(`https://wa.me/5492616852139?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  const estiloTab = (idTab: 'tecnologia' | 'indumentaria' | 'general') => {
    const esActivo = tipoProducto === idTab;
    return {
      padding: '10px 24px', 
      borderRadius: '30px', 
      border: `1px solid ${esActivo ? azulModerno : 'rgba(255,255,255,0.1)'}`,
      backgroundColor: esActivo ? azulModerno : 'rgba(0,0,0,0.4)', 
      color: '#fff', 
      fontWeight: 'bold' as const, 
      cursor: 'pointer', 
      fontSize: '0.85rem',
      textTransform: 'uppercase' as const, 
      letterSpacing: '1px', 
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', 
      transform: esActivo ? 'scale(1.05)' : 'scale(1)', 
      boxShadow: esActivo ? `0 0 15px ${azulModerno}60` : 'none'
    };
  };

  return (
    <>
      {/* ESTILOS CSS RESPONSIVOS PARA FONDOS EN MÓVILES */}
      <style>{`
        .bg-fixed-layer {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100vh;
          height: 100dvh; /* Soporte dinámico para barras de Safari y Chrome en celular */
          z-index: 0;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          pointer-events: none;
          will-change: opacity;
          transition: opacity 0.2s ease-out;
        }

        .bg-logistica {
          background-image: linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.70)), url('/fondo-logistica.jpeg');
        }

        .bg-mapa {
          background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.85)), url('/fondo-mapa.jpeg');
        }

        /* AJUSTES EXCLUSIVOS PARA CELULARES */
        @media (max-width: 768px) {
          .bg-fixed-layer {
            background-position: center top; /* Asegura que el centro/arriba de la imagen quede visible */
            background-size: cover;
          }
        }
      `}</style>

      <div 
        style={{ 
          position: 'relative', 
          minHeight: '100vh', 
          backgroundColor: '#000', 
          color: '#fff', 
          fontFamily: 'sans-serif', 
          overflowX: 'hidden'
        }}
      >
        {/* PRIMER FONDO RESPONSIVO (FONDO LOGÍSTICA) */}
        <div 
          className="bg-fixed-layer bg-logistica"
          style={{
            opacity: 1 - opacidadMapa,
          }}
        />

        {/* SEGUNDO FONDO RESPONSIVO (FONDO MAPA) */}
        <div 
          className="bg-fixed-layer bg-mapa"
          style={{
            opacity: opacidadMapa,
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Navbar adaptado para AndesBox */}
          <Navbar 
            setVista={setVista} 
            azulModerno={azulModerno} 
          />

          {/* VISTAS DINÁMICAS */}
          {vista === 'inicio' ? (
            <TrackingView 
              trackingBusqueda={trackingBusqueda} 
              setTrackingBusqueda={setTrackingBusqueda} 
              telBusqueda={telBusqueda} 
              setTelBusqueda={setTelBusqueda} 
              buscarTracking={buscarTracking} 
              cargando={cargandoTracking} 
              errorBusqueda={errorBusqueda} 
              paquete={paquete} 
              azulModerno={azulModerno} 
            />
          ) : (
            <CalculadoraView 
              pesoEstimado={pesoEstimado}
              setPesoEstimado={setPesoEstimado}
              tipoProducto={tipoProducto}
              setTipoProducto={setTipoProducto}
              costoEstimado={costoEstimado}
              iniciarConsultaWhatsApp={iniciarConsultaWhatsApp}
              azulModerno={azulModerno} 
              estiloTab={estiloTab} 
            />
          )}

          <WhatsAppChat />
          <footer style={{ textAlign: 'center', padding: '40px 5%', opacity: 0.4, fontSize: '0.8rem' }}>© 2026 AndesBox - Envíos Internacionales</footer>
        </div>

        {/* SIDEBAR PARA PREALERTAS O REQUISITOS */}
        {mostrarResumen && (
          <InfoSidebar 
            setMostrarResumen={setMostrarResumen} 
            azulModerno={azulModerno} 
            costoEstimado={costoEstimado}
            iniciarConsultaWhatsApp={iniciarConsultaWhatsApp}
          />
        )}

        {/* NOTIFICACIÓN FLOTANTE */}
        {notificacion && (
          <div style={{ position: 'fixed', top: '95px', right: '25px', backgroundColor: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(15px)', border: `1px solid ${azulModerno}`, borderRadius: '16px', padding: '12px 24px', color: '#fff', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 5000, boxShadow: `0 10px 25px rgba(59, 130, 246, 0.25)`, fontWeight: '600', fontSize: '0.9rem' }}>
            <CheckCircle color="#10b981" size={18} /> {notificacion}
          </div>
        )}
      </div>
    </>
  );
}