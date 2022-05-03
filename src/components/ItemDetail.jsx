import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
  const {description, price, title, pictureUrl} = item

  const onAdd = (cantidad) => { 
    console.log(cantidad)
  };

  return (
    <div className="card flex-row items-strech bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl justify-center font-bold">{title}</h2>
        <p className="self-center">{description}</p>
        <figure><img className="h-96" src={pictureUrl} alt={title}/></figure>
        <div className="card-actions justify-center self-center items-center flex-col">
          <p className="text-xl self-center font-bold">{price} </p>
          <ItemCount stock="5" initial="1" onAdd={onAdd}/>
        </div>
      </div>
    </div> 
  )
}
export default ItemDetail