import { type Product } from '../interfaces/productsType'

export type CartAction =
| {
  type: 'ADD_TO_CART'
  payload: Product
}
| {
  type: 'REMOVE_FROM_CART'
  payload: Product
}
| {
  type: 'DECREASE_QUANTITY'
  payload: Product
}
| {
  type: 'CLEAR_CART'
  payload: Product
}
