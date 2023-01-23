import Image from "next/image";
import useQuiosco from "../../hooks/useQuiosco";
import Categoria from '../Categoria/index';

const SideBar = () => {
  const { categorias } = useQuiosco();
  return (
    <>
      <Image width={180} height={300} src="/icons/logo.svg" alt="imagen logo" />

      <nav className="mt-10">
        {categorias.map((categoria) => {
          return (
            <Categoria key={categoria.id} categoria={categoria} />
          );
        })}
      </nav>
    </>
  );
};

export default SideBar;
