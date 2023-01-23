import Head from "next/head";
import { SideBar, } from "@/components";
import useQuiosco from "@/hooks/useQuiosco";

const Layout = ({ children, pagina }) => {

  
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quiosco Cafetería" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <SideBar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
