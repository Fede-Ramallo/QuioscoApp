import Image from 'next/image';
function ModalProducto() {
  return (
    <div className='md:flex gap-10'>
        <div className='md:w-1/3 '>
        <Image />
        </div>
        <div className='md:w-2/3 '></div>
    </div>
  )
}

export default ModalProducto