import Image from "next/image";
import useQuiosco from "../../hooks/useQuiosco";
import Categoria from "@/components/Categoria";

const SideBar = () => {
  const { categorias } = useQuiosco();
  return (
    <>
      <div className="flex relative ">
        <Image
          width={300}
          height={100}
          src="/icons/logo.svg"
          alt="imagen logo"
          priority
        />
      </div>
      <nav className="mt-10">
        {categorias.map((categoria) => {
          return <Categoria key={categoria.id} categoria={categoria} />;
        })}
      </nav>
    </>
  );
};

export default SideBar;
