import axios from 'axios'
import { type Product } from '../interfaces/productsType'

const BASE_URL = 'http://localhost:3000/products'

export const getProducts = async () => {
  const response = await axios.get(BASE_URL)
  return response.data as Product[]
}
