import { useState } from "react"

const ItemCount = ({stock,initial, onAdd}) =>{
  stock=parseInt(stock)
  initial=parseInt(initial)
  const [count, setCount] = useState(initial)

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

  return (
    <div className="card-actions justify-center items-center">
      <button className="badge badge-outline h-8" onClick={decrementar}><img src="https://i.ibb.co/WBrQ2KM/minus.png" alt="-"/></button> 
      <kbd className="kbd text-black bg-white">{count}</kbd>
      <button className="badge badge-outline h-8" onClick={incrementar}><img src="https://i.ibb.co/jJF3bmj/plus.png" alt="+"/></button>
      <button className="h-8 btn btn-primary" onClick={() => onAdd(count)}> Buy</button>
    </div>
  )
}
export default ItemCount