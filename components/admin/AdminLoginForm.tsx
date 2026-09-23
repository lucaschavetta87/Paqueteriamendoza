"use client";

import React from 'react';
import { useActionState } from 'react';
import { loginAction } from '../../app/admin/login/actions';

const azul = "#3b82f6";

export default function AdminLoginForm() {
  const [state, formAction, pendiente] = useActionState(loginAction, undefined);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      <style>{`
        .login-fondo {
          position: fixed; inset: 0; z-index: 0;
          background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('/fondo-logistica.jpeg');
          background-position: center; background-size: cover;
        }
      `}</style>

      <div className="login-fondo" />

      <form
        action={formAction}
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '420px', backgroundColor: 'rgba(10, 15, 30, 0.9)', backdropFilter: 'blur(25px)', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.1)', padding: '40px 35px', boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.5px', background: `linear-gradient(135deg, #ffffff 30%, ${azul} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            ANDESBOX
          </div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '6px', fontWeight: 700 }}>
            Área de Presupuestos
          </div>
        </div>

        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Usuario
        </label>
        <input
          name="usuario"
          type="text"
          autoComplete="username"
          placeholder="Usuario administrador"
          required
          style={{ width: '100%', boxSizing: 'border-box', padding: '15px', borderRadius: '13px', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.07)', color: '#fff', outline: 'none', fontSize: '0.95rem', marginBottom: '16px' }}
        />

        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Contraseña
        </label>
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Contraseña"
          required
          style={{ width: '100%', boxSizing: 'border-box', padding: '15px', borderRadius: '13px', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.07)', color: '#fff', outline: 'none', fontSize: '0.95rem', marginBottom: '20px' }}
        />

        {state?.error && (
          <div style={{ color: '#ff6b6b', fontSize: '0.85rem', textAlign: 'center', marginBottom: '15px', backgroundColor: 'rgba(255, 60, 60, 0.12)', border: '1px solid rgba(255,60,60,0.3)', padding: '10px', borderRadius: '10px', fontWeight: 600 }}>
            {state.error}
          </div>
        )}

        <button
          type="submit"
          disabled={pendiente}
          style={{ width: '100%', backgroundColor: azul, color: '#fff', border: 'none', padding: '16px', borderRadius: '13px', fontWeight: 900, fontSize: '1rem', cursor: 'pointer', letterSpacing: '1px', boxShadow: `0 8px 20px ${azul}40`, transition: 'all 0.3s' }}
        >
          {pendiente ? 'INGRESANDO...' : 'INGRESAR'}
        </button>

        <div style={{ marginTop: '22px', textAlign: 'center', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}>
          Acceso restringido - Solo personal autorizado
        </div>
      </form>
    </div>
  );
}