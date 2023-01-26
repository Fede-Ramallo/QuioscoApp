import Image from "next/image";
import React from "react";

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;
  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Orden: {id}</h3>
      <p className="text-lg font-bold">Cliente: {nombre}</p>

      <div>
        {pedido.map((comida) => {
          return (
            <div
              key={comida.id}
              className="py-3 flex border-b last-of-type:border-0 items-center"
            >
              <Image
                width={400}
                height={500}
                src={`/images/${comida.imagen}.jpg`}
                alt={`Imagen comida ${comida.nombre}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orden;
