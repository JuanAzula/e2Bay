import { createContext, useReducer, useState } from 'react'
import { CartReducer } from '../reducers/cart'
import { type Product } from '../interfaces/productsType'

export const CartContext = createContext({} as any)

function useCartReducer () {
  const cartItem = window.localStorage.getItem('cart')
  const cart = cartItem !== null ? JSON.parse(cartItem) : []
  const [state, dispatch] = useReducer(CartReducer, cart)
  const [totalPrice, setTotalPrice] = useState(window.localStorage.getItem('totalPrice') || '0')
  const addToCart = (product: Product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }
  const clearCart = (product: Product) => {
    dispatch({
      type: 'CLEAR_CART',
      payload: product
    })
  }
  const removeFromCart = (product: Product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })
  }

  const decreaseQuantity = (product: Product) => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: product
    })
  }

  return { state, addToCart, clearCart, removeFromCart, decreaseQuantity, totalPrice, setTotalPrice }
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state, addToCart, clearCart, removeFromCart, decreaseQuantity, totalPrice, setTotalPrice } = useCartReducer()

  return (
        <CartContext.Provider value={
            {
              cart: state,
              clearCart,
              addToCart,
              removeFromCart,
              decreaseQuantity,
              totalPrice,
              setTotalPrice
            }
        }>
            {children}

        </CartContext.Provider>
  )
}
