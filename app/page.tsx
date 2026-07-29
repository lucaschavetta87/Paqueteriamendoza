"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { supabase } from '../lib/supabase';
import WhatsAppChat from '../components/WhatsAppChat';
import { FaCheckCircle } from 'react-icons/fa';

// Componentes modulares adaptados a AndesBox
import Navbar from '../components/Navbar';
import TrackingView from '../components/TrackingVIew'; // Import corregido
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

  // --- COTIZADOR EN TIEMPO REAL ---
  const costoEstimado = useMemo(() => {
    // Tarifas de ejemplo por KG según categoría
    const tarifaBasePorKg = 15; // USD por ejemplo
    let multiplicador = 1;
    
    if (tipoProducto === 'tecnologia') multiplicador = 1.3; // Más recargo por aduana
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

  // --- ENVIAR PREALERTA / CONSULTA POR WHATSAPP ---
  const iniciarConsultaWhatsApp = () => {
    let mensaje = `Hola AndesBox! Quiero cotizar/prealertar un envío:\n\n`;
    mensaje += `- *Tipo de producto:* ${tipoProducto.toUpperCase()}\n`;
    mensaje += `- *Peso estimado:* ${pesoEstimado} kg\n`;
    mensaje += `- *Costo aproximado del flete:* USD ${costoEstimado.toFixed(2)}\n\n`;
    mensaje += `¿Me podrían indicar los pasos para enviarlo a su depósito en el exterior?`;
    
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
    <div 
      style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        backgroundColor: '#000', 
        color: '#fff', 
        fontFamily: 'sans-serif', 
        overflowX: 'hidden',
        /* --- ESTILOS DEL FONDO FIJO (PARALLAX) --- */
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url('/fondo-logistica.jpeg')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
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
          <FaCheckCircle color="#10b981" size={18} /> {notificacion}
        </div>
      )}
    </div>
  );
}