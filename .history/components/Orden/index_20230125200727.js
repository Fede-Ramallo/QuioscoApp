import React from "react";

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;
  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-black">Panel de Administracion</h3>
      <p className="text-lg my-10">Administra las ordenes</p>
    </div>
  );
};

export default Orden;
