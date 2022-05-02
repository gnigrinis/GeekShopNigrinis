import ItemDetail from './ItemDetail'
import { itemsData } from '../data/itemsData'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const {itemId} = useParams()

  const [item, setItem] = useState({})

  useEffect(() => {
    setItem(itemsData.find( m => m.id == itemId))
  }, [itemId])
  

  return (
    <>
      <ItemDetail item={item}/>
    </>
  )
}
export default ItemDetailContainer