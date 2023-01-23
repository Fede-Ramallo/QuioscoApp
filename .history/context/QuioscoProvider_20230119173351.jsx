import { useEffect, useState, createContext } from "react";
import axios from 'axios';

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);

    const obtenerCategorias = () => {
        const data = axios('/api/categorias');
        setCategorias(data);
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])

    return(
        <QuioscoContext.Provider value={categorias}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext;