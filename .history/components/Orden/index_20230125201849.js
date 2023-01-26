import Image from "next/image";
import React from "react";
import { formatearDinero } from "@/helpers";

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
              <div className="w-32">
                <Image
                  width={400}
                  height={500}
                  src={`/images/${comida.imagen}.jpg`}
                  alt={`Imagen comida ${comida.nombre}`}
                />
              </div>
              <div className="p-5 space-y-2">
                <h4 className="text-xl font-bold text-amber-500">
                  {comida.nombre}
                </h4>
                <p className="text-lg font-bold">Cantidad: {comida.cantidad}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="">
        <p className="">Total a pagar: {formatearDinero(total)}</p>
      </div>
    </div>
  );
};

export default Orden;
