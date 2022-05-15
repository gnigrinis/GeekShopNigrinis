import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext"
import CardList from "./CardList";

const Cart = () => {

  const {cart, addToCart, deleteFromCart, deleteCart, setCart} = useCartContext();
  
  return (
      <div className="flex-col flex-wrap gap-8">
        {(cart.length==0) ? 
        <>
          <div className="flex items-center">
            <h1>The cart is empty</h1>
            
            <Link to="/" className="h-8 btn btn-primary"> Back</Link>
          </div>
        </>:
        <>
          <div className="flex items-center">
            {cart.map( data => <CardList key={data.id} item={data}/>)}
            <Link to="/" className="h-8 btn btn-primary"> Checkout</Link>
          </div>
        </>
        }
      </div>
  )
}
export default Cart