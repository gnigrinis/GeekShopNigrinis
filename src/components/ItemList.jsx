import Item from './Item'
import { itemsData } from '../data/itemsData'
import { useEffect, useState } from 'react'

const ItemList = () => {
  
  const [items, setItems] = useState([])
  
  useEffect(() => {
    getItems()
  }, [])

  const getItems = () => { 
    const getItemsPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemsData)
      }, 2000)
    })
    getItemsPromise.then(data => {
      setItems(data)
    })
  }

  return (
    <div className="flex flex-wrap gap-8">
      {items.map( data => <Item key={data.id} item={data}/>)}
    </div>
  )
}
export default ItemList