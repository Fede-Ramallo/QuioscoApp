import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
import { formatearDinero } from "@/helpers";

const ModalProducto = () => {
  const { producto } = useQuiosco();
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3 ">
        <Image
          width={300}
          height={400}
          alt={`imagen producto ${producto.imagen}`}
          src={`/images/${producto.imagen}.jpg`}
        />
      </div>
      <div className="md:w-2/3 ">
        <div>
        <div></div>
        </div>

        <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatearDinero(producto.precio)}
        </p>
      </div>
    </div>
  );
};

export default ModalProducto;
