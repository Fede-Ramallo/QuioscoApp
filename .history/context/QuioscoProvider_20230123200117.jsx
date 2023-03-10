import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [paso, setPaso] = useState(1);

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
      toast.success('Guardado Correctamente')
    } else {
      setPedido([...pedido, producto]);
      toast.success('Agregado al pedido')
    }

    setModal(false);
  };

  const handleChangePaso = (paso) => {
    setPaso(paso);
  }

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
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
