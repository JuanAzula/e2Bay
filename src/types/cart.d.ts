export interface Cart {
  id: number
  name: string
  price: number
  stock: number
  image: string
  description: string
  category: string
  brand: string
  rating: number
  reviews: Review
  filters: string
}
