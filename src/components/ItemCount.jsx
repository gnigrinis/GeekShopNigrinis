import { useState } from "react"

const ItemCount = ({stock,initial}) =>{
  stock=parseInt(stock)
  initial=parseInt(initial)
  const [count, setCount] = useState(initial)

  const onAdd = () => {
    if (count < stock){
      setCount(count + 1)
    }else{
      console.log("Sorry, we don't have that many in stock")
    }
  }

  const onRemove = () => {
    if(count > 1){
      setCount(count - 1)
    }else{
      console.log("Sorry, you can't have less than 1")
    }
  }

  return (
    <div className="card-actions justify-end items-center">
      <button className="badge badge-outline h-8" onClick={onRemove}><img src="https://i.ibb.co/WBrQ2KM/minus.png" alt="-"/></button> 
      <kbd className="kbd text-black bg-white">{count}</kbd>
      <button className="badge badge-outline h-8" onClick={onAdd}><img src="https://i.ibb.co/jJF3bmj/plus.png" alt="+"/></button>
    </div>
  )
}
export default ItemCount