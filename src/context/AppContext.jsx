import { createContext, useContext, useEffect, useState } from "react"
import { itemsData } from '../data/itemsData'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {

  const [products, setProducts] = useState([]) 

  useEffect(() => {
    new Promise((resp) => resp (itemsData)).then((resp) => setProducts(resp))
    })
  

  return <AppContext.Provider value= {{products}}>{children}</AppContext.Provider>
  
}
export default AppContextProvider