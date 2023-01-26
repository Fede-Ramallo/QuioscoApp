import Image from "next/image";

const ResumenProducto = ({ producto }) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image width={300} height={400} alt={`Imagen producto ${producto.nombre}`} src={`/images/${producto.imagen}.jpg`} />
      </div>
      <div className="md:w-5/6">
      <p className="text-3xl font-bold">{producto.nombre}</p>
      <p className="text-xl font-bold mt-2">Cantidad: {producto.cantidad}</p>
      <p className="text-xl font-bold mt-2">{producto.nombre}</p>
      </div>
    </div>
  );
};

export default ResumenProducto;
