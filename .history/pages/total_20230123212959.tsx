import { useEffect } from "react";
import { Layout } from "@/components";

export default function Total() {

  const comprobarPedido = () => {}

  const colocarOrden = (e: any) => {
    e.preventDefault();
    console.log("me gusta el papo")
  }

  return (
    <Layout pagina="Total y Confirmar Pedido">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            className="bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded-md"
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {""} <span className="font-bold">$200</span>{" "}
          </p>
        </div>

        <div className="mt-5">
          <input
          type="submit"
            className="w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white bg-indigo-600 text-center"
            value="Confirmar Pedido"
          />
        </div>
      </form>
    </Layout>
  );
}
