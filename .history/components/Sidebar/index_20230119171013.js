import Image from 'next/image';
import { useQuiosco } from '@/hooks/useQuiosco';

const SideBar = () => {
    const { categorias } =
  return (
    <>
      <Image width={300} height={300} src="/icons/logo.svg" alt="imagen logo" />

      <nav className="mt-10">
        
      </nav>
    </>
  );
};

export default SideBar;