import { Layout } from "@/components";
import useQuiosco from "@/hooks/useQuiosco";

export default function Resumen() {
  const { pedido } = useQuiosco();
  return (
    <Layout pagina="Resumen">
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu pedido</p>

      {pedido.len}
    </Layout>
  );
}
