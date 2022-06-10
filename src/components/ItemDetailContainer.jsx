import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

  const {itemId} = useParams()
  
  const [item, setItem] = useState({})

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "items");
    
    getDocs(itemsCollection).then((snapshot) => {
        const coleccion = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
        setItem(coleccion.find( m => m.id == itemId))
    });

  }, [itemId])

  return (
    <>
      <ItemDetail item={item}/>
    </>
  )
}
export default ItemDetailContainer