import { useRef}
import { Layout, Producto } from "@/components";
import { motion } from "framer-motion";
import useQuiosco from "@/hooks/useQuiosco";

const ListVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

export default function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">
        Elije y personaliza tu pedido a continuación
      </p>
      <motion.div
        className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
        variants={ListVariants}
        initial="hidden"
        animate="show"
      >
        {categoriaActual?.Producto?.map((producto: any, i: number) => {
          return <Producto key={producto.id} producto={producto} pos={i} />;
        })}
      </motion.div>
    </Layout>
  );
}
