import Image from "next/image";
import useQuiosco from "../../hooks/useQuiosco";
import { Categoria } from '@/components/Categoria';

const SideBar = () => {
  const { categorias } = useQuiosco();
  return (
    <>
      <Image width={300} height={300} src="/icons/logo.svg" alt="imagen logo" />

      <nav className="mt-10">
        {/* {categorias.map((categoria) => {
          return <Categoria key={categoria.id} categoria={categoria} />;
        })} */}
        <button onClick={() => console.log(categoria)}>Click aqui y pasara algo maravilloso</button>
      </nav>
    </>
  );
};

export default SideBar;
