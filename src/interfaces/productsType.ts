export interface ProductsType {
  products: Product[]
}

export interface Product {
  id: string
  name: string
  price: number
  stock: number
  image: string
  description: string
  category: string
  quantity: number
  brand: string
  rating: number
  reviews: Review[]
  filters: string[]
}

export interface Review {
  id: number
  userId: number
  rating: number
  comment: string
  date: Date
}

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
