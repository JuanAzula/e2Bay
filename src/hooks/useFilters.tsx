import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import { type Product } from '../interfaces/productsType'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products: Product[]) => {
    return products?.filter((product) => {
      return (
        product?.price >= filters.minPrice &&
                (
                  filters.category === 'all' ||
                    product.category === filters.category
                )
      )
    })
  }

  return { filters, setFilters, filterProducts }
}
