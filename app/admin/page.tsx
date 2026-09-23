import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { esAdministradorLogueado } from '../../lib/adminAuth';
import PresupuestosEnvio from '../../components/admin/PresupuestosEnvio';

export const metadata: Metadata = {
  title: 'Presupuestos de Envío - AndesBox',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const esAdmin = await esAdministradorLogueado();
  if (!esAdmin) redirect('/admin/login');

  const vendedor = process.env.ADMIN_USER || 'Administrador';

  return <PresupuestosEnvio vendedorInicial={vendedor} />;
}