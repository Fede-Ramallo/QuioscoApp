import React from "react";

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;
  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Orden: {id}</h3>
      <p className="text-lg font-bold">Cliente: {nombre}</p>

      <div>
        {pedido.map(comida => {
            return(
                <div key={comida.id} className="">

                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Orden;
