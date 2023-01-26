import { AdminLayout } from "@/components";

export default function Admin() {
  return (
    <AdminLayout pagina={"Admin"}>
      <h3 className="text-2xl font-bold">{nombre}</h3>
      <p className="mt-5 font-black text-4xl text-amber-500">
        {formatearDinero(precio)}
      </p>
    </AdminLayout>
  );
}
