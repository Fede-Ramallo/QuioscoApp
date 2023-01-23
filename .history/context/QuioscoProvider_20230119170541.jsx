import { useEffect, useState, createContext } from "react";
import axios from 'axios';

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
    const [cate]
    return(
        <QuioscoContext.Provider value={{}}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext;