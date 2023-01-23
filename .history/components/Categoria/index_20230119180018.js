import Image from "next/image";


const Categoria = ({categoria}) => {
    const {nombre, icono, id} = categoria;
    return (
        <div>
            <Image width={100} height={100} src={`/icons/icono_${icono}.svg`} alt="imagen icono" className="mr-5"/>
        </div>
    )
};

export default Categoria;