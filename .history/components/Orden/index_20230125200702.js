import React from "react";

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;
  return (
    <div className="order">
      <h1 className="text-4xl font-black">Panel de Administracion</h1>
      <p className="text-2xl my-10">Administra las ordenes</p>
    </div>
  );
};

export default Orden;
