import Image from "next/image";

const Producto = ({ producto }) => {
    const {nombre,}
  return (
    <div className="border p-3">
      <Image src={`/images/${}`} />
    </div>
  );
};

export default Producto;
