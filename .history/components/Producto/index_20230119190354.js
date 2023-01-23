import Image from "next/image";

const Producto = ({ producto }) => {
    const {nombre, precio, imagen} = producto;
  return (
    <div className="border p-3">
      <Image src={`/images/${imagen}`} alt="imagen del producto" />
    </div>
  );
};

export default Producto;
