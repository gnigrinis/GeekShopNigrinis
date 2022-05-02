import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
  const {description, price, title, pictureUrl} = item

  const onAdd = (cantidad) => { 
    console.log(cantidad)
  };

  return (
    <div className="card flex-row items-stretch	bg-base-100 shadow-xl">
      <figure><img className="w-400px h-400px " src={pictureUrl} alt={title}/></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <p className="text-2xl">{price}</p>
          <ItemCount stock="5" initial="1" onAdd={onAdd}/>
        </div>
      </div>
    </div> 
  )
}
export default ItemDetail