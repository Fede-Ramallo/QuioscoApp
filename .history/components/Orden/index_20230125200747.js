import React from "react";

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;
  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Orden</h3>
      <p className="text-lg font-bold">Administra las ordenes</p>
    </div>
  );
};

export default Orden;
