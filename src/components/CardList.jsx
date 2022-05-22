import { useCartContext } from "../context/CartContext";

const CardList = ({item}) => {
  const {title, pictureUrl, price, quantity, stock} = item

  const {addToCart, deleteFromCart, deleteCart, setCart} = useCartContext();

  return (
    <div className="card flex-row w-4/6 mb-2 p-5 bg-base-100 shadow-xl items-center">
      <figure><img className="w-32" src={pictureUrl} alt={title}/></figure>
      <div className="card-body">
        <h2 className="card-title justify-center">
          {title}
        </h2>
      </div>
      <div className="card-body">
        <h2 className="card-title justify-center">
          {quantity}
        </h2>
      </div>
      <div className="card-body">
        <h2 className="card-title justify-center">
          {price}
        </h2>
      </div>
      <button className="btn btn-primary" onClick={() => deleteFromCart(item)}>Remove Item</button>
    </div>
    
  )
}
export default CardList