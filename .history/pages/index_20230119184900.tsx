import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import useQuiosco from "@/hooks/useQuiosco";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <h1>
      </h1>
    </Layout>
  );
}
