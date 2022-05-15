import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {


  const [cart, setCart] = useState([])

  const isInCart = (id) => cart.find(prod => prod.id === id)

  const addToCart = (producto, cantidad) => {
    const newCart = [...cart]

    const productoIsInCart = isInCart(producto.id)

    if (productoIsInCart) {
      newCart[newCart.findIndex((prod) => prod.id === productoIsInCart.id)].quantity += cantidad

      setCart(newCart)
      return
    }
    producto.quantity = cantidad
    setCart([...newCart, producto])
  }

  const deleteFromCart = (producto) => {
    const newCart = [...cart]

    const productoIsInCart = isInCart(producto.id)

    if (!productoIsInCart) {
      return
    }

    const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

    setCart(deleteProduct)
  }

  const deleteCart = () => setCart([])

  console.log(cart)

  return (
    <CartContext.Provider value={{cart, addToCart, deleteFromCart, deleteCart, setCart}}> 
      {children} 
    </CartContext.Provider>
  )
}