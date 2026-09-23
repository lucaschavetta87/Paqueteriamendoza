import type { Metadata } from 'next';
import AdminLoginForm from '../../../components/admin/AdminLoginForm';

export const metadata: Metadata = {
  title: 'Acceso Administrador - AndesBox',
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return <AdminLoginForm />;
}