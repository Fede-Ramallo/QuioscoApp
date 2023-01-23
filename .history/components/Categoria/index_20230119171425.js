import Image from "next/image";


const Categoria = ({categoria}) => {
    const {nombre, icono, id} = categoria;
    return (
        <div>
            <Image width={100} height={100} alt="imagen icono"/>
        </div>
    )
};

export default Categoria;