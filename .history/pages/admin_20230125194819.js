import useSWR from ''
import { AdminLayout } from "@/components";

export default function Admin() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-black">Panel de Administracion</h1>
      <p className="text-2xl my-10">Administra las ordenes</p>
    </AdminLayout>
  );
}
