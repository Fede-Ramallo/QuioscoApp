const { default: Image } = require("next/image");

const SideBar = () => {
  return (
    <>
      <Image width={300} height={300} src="/icons/logo.svg" alt="imagen logo" />

      <nav className="">
        
      </nav>
    </>
  );
};

export default SideBar;