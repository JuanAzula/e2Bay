import axios from 'axios'
import { Product } from '../interfaces/productsType'

const baseUrl = 'http://localhost:3001/users'

export const getUsers = async () => {
  const response = await axios.get(baseUrl)
  console.log(response.data)
  return response.data
}

export const addWishlist = async (userId: number, productId: string, product: any) => {
  console.log(userId, productId)
  const response = await fetch(`${baseUrl}/${userId}/wishlist/${productId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ product })
  })
  console.log(response)
  return response
}
