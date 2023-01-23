import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import useQuiosco from "@/hooks/useQuiosco";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <Layout pagina={`Menu $`}>
      <h1>Inicio</h1>
    </Layout>
  );
}
