import Image from "next/image";


const Categoria = ({categoria}) => {
    const {nombre, icono, id} = categoria;
    return (
        <div className="flez">
            <Image width={100} height={100} src={`/icons/icono_${icono}.svg`} alt="imagen icono" className="mr-5"/>
            <button type="button" className="text-2xl font-bold hover:cursor-pointer">
                {nombre}
            </button>
        </div>
    )
};

export default Categoria;