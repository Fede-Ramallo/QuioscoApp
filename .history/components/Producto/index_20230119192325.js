import Image from "next/image";
import { formatearDinero } from '@/helpers';

const Producto = ({ producto }) => {
  const { nombre, precio, imagen } = producto;
  return (
    <div className="border p-3">
      <Image
        src={`/images/${imagen}.jpg`}
        alt="imagen del producto"
        width={400}
        height={500}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>
        <button type="button" className="bg-indigo-600">Agregar</button>
      </div>
    </div>
  );
};

export default Producto;