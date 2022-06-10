import Item from './Item'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from "firebase/firestore";


export const ItemList = () => {

  const {categoryId} = useParams()
  
  const [items, setItems] = useState([])
  
  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "items");
    
    getDocs(itemsCollection).then((snapshot) => {
        const coleccion = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
        (categoryId !== undefined) ? setItems(coleccion.filter( m => m.categoryId == categoryId)) : setItems(coleccion)
    });
  })


  return (
    <div className="flex flex-row flex-wrap gap-8">
      {items.map( data => <Item key={data.id} item={data}/>)}
    </div>
  )
}
export default ItemList