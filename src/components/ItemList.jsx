import Item from './Item'
import { itemsData } from '../data/itemsData'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemList = () => {

  const {categoryId} = useParams()
  
  const [items, setItems] = useState([])
  
  useEffect(() => {
    getItems()
  }, [categoryId])

  const getItems = () => { 
    const getItemsPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemsData)
      }, 2000)
    })
    getItemsPromise.then(data => {
      (categoryId !== undefined)? setItems(data.filter(data => data.categoryId == categoryId)) : setItems(data)
    })
  }

  return (
    <div className="flex flex-wrap gap-8">
      {items.map( data => <Item key={data.id} item={data}/>)}
    </div>
  )
}
export default ItemList