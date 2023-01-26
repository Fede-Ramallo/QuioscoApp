import { useEffect, useState, createContext, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Router, { useRouter } from "next/router";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const router = useRouter();
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [nombre, setNombre] = useState("");
  const [total, setTotal] = useState(0);
  const ref = useRef(null);

  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((c) => c.id === id);
    setCategoriaActual(categoria[0]);
    router.push("/");

    if()
  };

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      const pedidoActualizado = pedido.map((productoState) =>
        productoState.id === producto.id ? producto : productoState
      );
      setPedido(pedidoActualizado);
      toast.success("Guardado Correctamente");
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado al pedido");
    }

    setModal(false);
  };

  const handleEditarCantidad = (id) => {
    const productoActualizar = pedido.filter((producto) => producto.id === id);
    setProducto(productoActualizar[0]);

    setModal(!modal);
  };

  const handleEliminarProducto = (id) => {
    const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
    setPedido(pedidoActualizado);
  };

  const colocarOrden = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/ordenes", {
        pedido,
        nombre,
        total,
        fecha: Date.now().toString(),
      });

      // Resetear la app
      setCategoriaActual(categorias[0]);
      setPedido([]);
      setNombre("");
      setTotal(0);

      toast.success("Pedido Realizado Correctamente");

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );

    setTotal(nuevoTotal);
  }, [pedido]);

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        pedido,
        handleAgregarPedido,
        handleEditarCantidad,
        handleEliminarProducto,
        nombre,
        setNombre,
        colocarOrden,
        total,
        ref
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
