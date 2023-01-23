import { useEffect, useState, createContext } from "react";
import axios from 'axios';

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);

    const obtenerCategorias = async () => {
        const data = await axios('/api/categorias');
        setCategorias(data);
        const xd = await console.log()
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