"use server";

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const COOKIE_NAME = 'andesbox_admin';
const SESION_DURACION_SEG = 60 * 60 * 12; // 12 horas

export interface LoginResult {
  error?: string;
}

export async function loginAction(
  _prev: LoginResult | undefined,
  formData: FormData
): Promise<LoginResult> {
  const usuario = String(formData.get('usuario') || '').trim();
  const password = String(formData.get('password') || '').trim();

  const adminUser = process.env.ADMIN_USER;
  const adminPass = process.env.ADMIN_PASSWORD;

  if (!adminUser || !adminPass) {
    return { error: 'Credenciales de administrador no configuradas (.env.local).' };
  }

  if (usuario === adminUser && password === adminPass) {
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, String(Date.now()), {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: SESION_DURACION_SEG,
      path: '/',
    });
    redirect('/admin');
  }

  return { error: 'Usuario o contraseña incorrectos.' };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect('/admin/login');
}