import Image from "next/image";

const Producto = ({ producto }) => {
    const {nombre, precio, imagen} = producto;
  return (
    <div className="border p-3">
      <Image src={`/images/${imagen}.jpg`} alt="imagen del producto" width={400} height={500} />
      <div>
      <h3>{nombre}</h3>
      </div>
    </div>
  );
};

export default Producto;
