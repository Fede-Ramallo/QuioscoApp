import useSWR from "swr";
import axios from "axios";
import { AdminLayout, Orden } from "@/components";

export default function Admin() {
  const fetcher = () => axios("/api/ordenes").then((datos) => datos.data);
  const { data, error, isLoading } = useSWR("/api/ordenes", fetcher, {refreshInterval: 100});
  return (
    <AdminLayout>
      <h1 className="text-4xl font-black">Panel de Administracion</h1>
      <p className="text-2xl my-10">Administra las ordenes</p>

      {data && data.length ? (
        data.map((orden) => {
          return <Orden key={orden.id} orden={orden} />;
        })
      ) : (
        <p className="text-2xl my-10">No hay ordenes pendientes</p>
      )}
    </AdminLayout>
  );
}