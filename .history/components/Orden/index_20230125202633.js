import Image from "next/image";
import React from "react";
import { formatearDinero } from "@/helpers";
import axios from "axios";

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;

    const completarOrden = () => {
        try {
            await axios
        } catch (error) {
            console.log(error);
        }
    }

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
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-500">Total a pagar: {formatearDinero(total)}</p>
        <button className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg">Completar Orden</button>
      </div>
    </div>
  );
};

export default Orden;
