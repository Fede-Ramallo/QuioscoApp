import { useEffect, useState, createContext } from "react";
import axios from 'axios';

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);

    const obtenerCategorias = async () => {
        const data = await axios('/api/categorias');
        setCategorias(data);
    }

    useEffect(() => {
        obtenerCategorias();
        console.log(categorias);
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