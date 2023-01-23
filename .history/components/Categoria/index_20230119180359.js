import Image from "next/image";


const Categoria = ({categoria}) => {
    const {nombre, icono, id} = categoria;
    return (
        <div className="flex items-center gap-4 w-full border p-5 hover:bg-amber-400">
            <Image width={195} height={150} src={`/icons/icono_${icono}.svg`} alt="imagen icono" className="mr-5"/>
            <button type="button" className="text-2xl font-bold hover:cursor-pointer">
                {nombre}
            </button>
        </div>
    )
};

export default Categoria;