import Image from "next/image";
import { formatearDinero } from "@/helpers";

const ResumenProducto = ({ producto }) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          alt={`Imagen producto ${producto.nombre}`}
          src={`/images/${producto.imagen}.jpg`}
        />
      </div>
      <div className="md:w-5/6">
        <p className="text-3xl font-bold">{producto.nombre}</p>
        <p className="text-xl font-bold mt-2">Cantidad: {producto.cantidad}</p>
        <p className="text-xl font-bold text-amber-500 mt-2">
          Precio: {formatearDinero(producto.precio)}
        </p>
        <p className="text-sm text-gray-700 mt-2">
          Subtotal: {formatearDinero(producto.precio * producto.cantidad)}
        </p>
      </div>
      <div>
        <button type="button" className="bg-sky-700 flex px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full lg:w-auto">Editar</button>
        <button type="button" className="bg-red-700 flex px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full lg:w-auto">Eliminar</button>
      </div>
    </div>
  );
};

export default ResumenProducto;
