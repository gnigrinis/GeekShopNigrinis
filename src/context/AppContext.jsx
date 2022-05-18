import { createContext, useContext, useEffect, useState } from "react"
// import { itemsData } from '../data/itemsData'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {

  const [products, setProducts] = useState([]) 

  // useEffect(() => {
  //   new Promise((resp) => resp (itemsData)).then((resp) => setProducts(resp))
  //   })
  
  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "items");
    
    getDocs(itemsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
    })
  })


  return <AppContext.Provider value= {{products}}>{children}</AppContext.Provider>
  
}
export default AppContextProvider