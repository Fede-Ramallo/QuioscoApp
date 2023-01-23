import Head from "next/head";
import Image from "next/image";
import { Layout, Producto } from "@/components";
import useQuiosco from "@/hooks/useQuiosco";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">
        Elije y personaliza tu pedido a continuación
      </p>
      <div className="grid gap">
      {categoriaActual?.Producto?.map((producto) => {
        return <Producto key={producto.id} producto={producto} />;
      })}
      </div>
    </Layout>
  );
}
