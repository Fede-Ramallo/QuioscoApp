import React from "react";
import { useRouter } from "next/router";
import useQuiosco from "@/hooks/useQuiosco";

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
  const { handleChangePaso } = useQuiosco();
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => {
          return (
            <button
              className="text-2xl font-bold"
              key={paso.paso}
              onClick={() => {
                router.push(paso.url);
                handleChangePaso(paso.paso);
              }}
            >
              {paso.nombre}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Pasos;