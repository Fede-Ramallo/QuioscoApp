import React from "react";

const pasos = [
  {
    paso: 1,
    nombre: "Menú",
    url: "/",
  },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y Total", url: "/total" },
];

const Pasos = () => {
  return (
    <>
      <div>
        {pasos.map((paso) => {
          <button className="text-2xl" key={paso.paso}>{paso.nombre}</button>;
        })}
      </div>
    </>
  );
};

export default Pasos;
