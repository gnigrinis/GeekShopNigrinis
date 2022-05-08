import { useState } from "react"
import { useAppContext } from "../context/AppContext"
import { useCartContext } from "../context/CartContext"

const ItemCount = ({stock,initial, onAdd, id}) =>{
  stock=parseInt(stock)
  initial=parseInt(initial)
  const [count, setCount] = useState(initial)

  const {addToCart} = useCartContext()
  const {products} = useAppContext()

  const incrementar = () => {
    if (count < stock){
      setCount(count + 1)
    }else{
      console.log("Sorry, we don't have that many in stock")
    }
  }

  const decrementar = () => {
    if(count > 1){
      setCount(count - 1)
    }else{
      console.log("Sorry, you can't have less than 1")
    }
  }

  const handleClick = (id, cantidad) => {
    const findProduct = products.find(prod => prod.id === id)

    if(!findProduct){
      console.log("Sorry, we don't have that product")
      return
    }

    addToCart(findProduct, cantidad)
    onAdd(count)
  }

  return (
    <>
      <div className="card-actions items-center">
        <button className="badge badge-outline h-8" onClick={decrementar}><img src="https://i.ibb.co/WBrQ2KM/minus.png" alt="-"/></button> 
        <kbd className="kbd text-black bg-white">{count}</kbd>
        <button className="badge badge-outline h-8" onClick={incrementar}><img src="https://i.ibb.co/jJF3bmj/plus.png" alt="+"/></button>
        <button className="h-8 btn btn-primary" onClick={() => handleClick(id, count)}> Add to cart</button>  
      </div>
      <div>
        <p className="font-bold mar">Stock:</p><kbd className="kbd text-black bg-white m-1">{stock}</kbd>
      </div>
    </>
  )
}
export default ItemCount