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
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">
          Shoes!
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end items-center">
          <button class="badge badge-outline h-8" onClick={onRemove}><img src="https://i.ibb.co/WBrQ2KM/minus.png" alt="-"/></button> 
          <kbd class="kbd text-black bg-white">{count}</kbd>
          <button class="badge badge-outline h-8" onClick={onAdd}><img src="https://i.ibb.co/jJF3bmj/plus.png" alt="+"/></button>
        </div>
      </div>
    </div>
  )
}
export default ItemCount