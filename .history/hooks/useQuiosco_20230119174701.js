import { useContext } from "react";
import QuioscoContext from "../context/";

const useQuiosco = () => {
  return useContext(QuioscoContext);
};

export default useQuiosco;
