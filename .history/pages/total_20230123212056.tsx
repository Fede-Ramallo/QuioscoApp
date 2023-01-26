import { Layout } from "@/components";

export default function Total() {
  return (
    <Layout pagina="Total y Confirmar Pedido">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

      <form>
        <div>
          <label className="block">Nombre</label>
        </div>
      </form>
    </Layout>
  );
}
