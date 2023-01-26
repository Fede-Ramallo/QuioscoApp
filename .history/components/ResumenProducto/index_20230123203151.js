const ResumenProducto = ({producto}) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-10">{producto.nombre}</div>
  )
}

export default ResumenProducto