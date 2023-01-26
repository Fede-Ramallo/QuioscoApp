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
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {categoriaActual?.Producto?.map((producto: any, i:number) => {
        return <Producto key={producto.id} producto={producto} custom={i}/>;
      })}
      </div>
    </Layout>
  );
}
