import { AdminLayout } from "@/components";

export default function Admin() {
  return (
    <AdminLayout pagina={"Admin"}>
      <h1 className="text-2xl font-bold"></h1>
      <p className="mt-5 font-black text-4xl text-amber-500">
        {formatearDinero(precio)}
      </p>
    </AdminLayout>
  );
}
