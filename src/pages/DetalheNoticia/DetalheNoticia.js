const DetalheNoticia = ({title, img, descricao}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{descricao}</p>
      <img src={img} alt="" />
    </div>
  )
}
export default DetalheNoticia