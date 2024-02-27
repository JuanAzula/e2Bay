import axios from 'axios'

const baseUrl = 'http://localhost:3001/users'

export const getUsers = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const addWishlist = async (userId: number, productId: string, product: any) => {
  const response = await fetch(`${baseUrl}/${userId}/wishlist/${productId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ product })
  })
  return response
}
