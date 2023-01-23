import { useEffect, useState, createContext } from "react";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
    return(
        <QuioscoContext.Provider value={{}}></QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}