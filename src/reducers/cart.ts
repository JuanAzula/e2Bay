/* eslint-disable no-case-declarations */

import { type Product, type CartAction } from '../interfaces/productsType'
export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY'
}

export const updateLocalStorage = (state: Product[]) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const updateTotalPrice = (state: Product[] | string) => {
  let total = 0
  if (state !== '0' && Array.isArray(state)) {
    state.forEach((item) => {
      total += item.price * item.quantity
    })
    window.localStorage.setItem('totalPrice', JSON.stringify(total))
  } else {
    window.localStorage.setItem('totalPrice', JSON.stringify(0))
  }
}

export const CartReducer = (state: Product[], action: CartAction) => {
  const { type } = action
  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = action.payload
      const productInCartIndex = state.findIndex(item => item.id === id)
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity++
        updateLocalStorage(newState)
        updateTotalPrice(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ]
      updateLocalStorage(newState)
      updateTotalPrice(newState)
      return newState
    }
    case CART_ACTION_TYPES.DECREASE_QUANTITY:
      const productInCartIndex = state.findIndex(item => item.id === action.payload.id)

      if (state[productInCartIndex].quantity > 0) {
        let newState = structuredClone(state)
        newState[productInCartIndex].quantity--
        if (newState[productInCartIndex].quantity === 0) {
          newState = state.filter(item => item.id !== action.payload.id)
          updateTotalPrice(newState)
          return newState
        }

        updateLocalStorage(newState)
        updateTotalPrice(newState)
        return newState
      } else {
        return state
      }

    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      const { id } = action.payload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      updateTotalPrice(newState)
      return newState

    case CART_ACTION_TYPES.CLEAR_CART:
      updateLocalStorage([])
      updateTotalPrice('0')
      return []

    default:
      return state
  }
}
