import Image from "next/image";
import { formatearDinero } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco";
import { motion } from "framer-motion";

const ListItemVariants = {
  hidden: { opacity: 0 },
  show: (i) => ({ opacity: 1, transition: { delay: i * 0.3 } }),
};

const Producto = ({ producto, custom }) => {
  const { handleSetProducto, handleChangeModal } = useQuiosco();
  const { nombre, precio, imagen } = producto;
  return (
    <motion.div
      className="border p-3"
      variants={ListItemVariants}
      initial="hidden"
      animate="show
      "
    >
      <Image
        src={`/images/${imagen}.jpg`}
        alt="imagen del producto"
        width={400}
        height={500}
      />
      <div className="flex flex-col justify-between p-5 h-64">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleSetProducto(producto);
            handleChangeModal();
          }}
        >
          Agregar
        </button>
      </div>
    </motion.div>
  );
};

export default Producto;
