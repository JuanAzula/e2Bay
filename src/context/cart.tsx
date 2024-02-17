import { createContext, useReducer, useState } from 'react'
import { CartReducer } from '../reducers/cart'

export const CartContext = createContext({} as any)

function useCartReducer () {
  const [state, dispatch] = useReducer(CartReducer, window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : [])
  const [totalPrice, setTotalPrice] = useState(window.localStorage.getItem('totalPrice') ? JSON.parse(window.localStorage.getItem('totalPrice')) : '0')
  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }
  const clearCart = (product) => {
    dispatch({
      type: 'CLEAR_CART',
      payload: product
    })
  }
  const removeFromCart = (product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })
  }

  const decreaseQuantity = (product) => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: product
    })
  }

  return { state, addToCart, clearCart, removeFromCart, decreaseQuantity, totalPrice, setTotalPrice }
}

export function CartProvider ({ children }) {
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
