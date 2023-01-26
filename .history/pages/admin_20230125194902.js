import useSWR from 'swr';
import { AdminLayout } from "@/components";

export default function Admin() {
  const {data, error, isLoading} = useSWR('/api/user')
  return (
    <AdminLayout>
      <h1 className="text-4xl font-black">Panel de Administracion</h1>
      <p className="text-2xl my-10">Administra las ordenes</p>
    </AdminLayout>
  );
}
