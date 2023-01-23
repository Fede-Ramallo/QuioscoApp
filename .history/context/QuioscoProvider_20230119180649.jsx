import { useEffect, useState, createContext } from "react";
import axios from 'axios';

const QuioscoContext = createContext()

const QuioscoProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias');
        setCategorias(data);
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])

    const handleClickCategoria = id => {
        console.log(id);
    }

    return(
        <QuioscoContext.Provider value={{categorias, categoriaActual, handleCategoria}}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext;