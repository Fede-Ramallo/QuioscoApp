import Image from "next/image";

const Producto = ({ producto }) => {
    const {nombre, precio, imagen} = producto;
  return (
    <div className="border p-3">
      <Image src={`/images/${imagen}.jpg`} alt="imagen del producto" width={400} />
    </div>
  );
};

export default Producto;
