import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext"
import CardList from "./CardList";

const Cart = () => {

  const {cart} = useCartContext();
  let total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  
  const checkout = async () => {
    const user = {
      buyer: {name:"John Doe", phone: "555-5555", email: "jhondoe@gmail.com"},
      items: cart.map(item => ({id: item.id, title: item.title, price: item.price})),
      total: total
    }
    
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
  
    const reponse = await addDoc(ordersCollection, user);
    //Muestra por consola el id del documento creado
    console.log("Id", reponse.id);
  }




  return (
      <div className="flex-col gap-8">
        {(cart.length==0) ? 
        <>
          <div className="flex items-center">
            <h1>The cart is empty</h1>
            
            <Link to="/" className="h-8 btn btn-primary"> Back</Link>
          </div>
        </>:
        <>
          <div className="flex flex-col items-center">
            {cart.map( data => <CardList key={data.id} item={data}/>)}
            <button onClick={checkout} className="h-8 btn btn-primary"> Checkout</button>
          </div>
        </>
        }
      </div>
  )
}
export default Cart