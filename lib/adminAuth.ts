import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'andesbox_admin';

export async function esAdministradorLogueado(): Promise<boolean> {
  const cookieStore = await cookies();
  return Boolean(cookieStore.get(ADMIN_COOKIE));
}