import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";

const Categoria = ({categoria}) => {
    const {nombre, icono, id} = categoria;
    const { categoriaActual, handleClickCategoria} = useQuiosco();
    return (
        <div className={{"flex items-center gap-4 w-full border p-5 hover:bg-amber-400"}>
            <Image width={80} height={80} src={`/icons/icono_${icono}.svg`} alt="imagen icono" className="mr-5"/>
            <button type="button" className="text-2xl font-bold hover:cursor-pointer" onClick={() => handleClickCategoria(id)}>
                {nombre}
            </button>
        </div>
    )
};

export default Categoria;