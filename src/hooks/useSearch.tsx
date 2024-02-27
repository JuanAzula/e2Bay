import { useContext } from 'react'
import { SearchContext } from '../context/search'
import { type Product } from '../interfaces/productsType'

export const useSearch = () => {
  const { searchTerms, setSearchTerms, searchedProducts, setSearchedProducts } = useContext(SearchContext)
  const searchProducts = (products: Product[]) => {
    const productsList: Product[] = []
    products.forEach((product) => {
      if (product.name.toLowerCase().includes(searchTerms.toLowerCase())) {
        productsList.push(product)
      }
      localStorage.setItem('searchedProducts', JSON.stringify(productsList))
    })
    setSearchedProducts(productsList)
    if (productsList.length === 0) {
      localStorage.removeItem('searchedProducts')
      setSearchedProducts([])
    }
  }
  return { searchTerms, setSearchTerms, searchedProducts, searchProducts }
}
