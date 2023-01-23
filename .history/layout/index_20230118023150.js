import Head from "next/head";
import Image from "next/image";

export default function Layout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quiosco Cafetería" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:flex">
        <aside class></aside>
        <main class></main>
      </div>
    </>
  );
}
