import { useId } from 'react'
import '../../styles/filters.css'
import { useFilters } from '../../hooks/useFilters'
import { type Product } from '../../interfaces/productsType'
import { StyledRange } from '../StyledRange'
import { StyledSelect } from '../StyledSelect'
export function Filters () {
  const { filters, setFilters }: { filters: any, setFilters: any } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState: Product) => {
      return {
        ...prevState,
        minPrice: e.target.value
      }
    })
  }

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState: Product) => ({
      ...prevState,
      category: e.target.value
    })
    )
  }

  return (
        <section className="filters">
            <div className="filter">
                <label htmlFor="{minPriceFilterId}">Price</label>
                <StyledRange
                    type='range'
                    name="price"
                    id={minPriceFilterId}
                    min='0'
                    max='2000'
                    onChange={handleChangeMinPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div className="filter">
                <label htmlFor="{categoryFilterId}">Category</label>
                <StyledSelect name="category" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="headsets">Headsets</option>
                    <option value="laptops">Laptops</option>
                    <option value="speakers">Speakers</option>
                </StyledSelect>
            </div>
        </section>
  )
}
