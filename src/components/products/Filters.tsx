import { useId } from 'react'
import '../../styles/filters.css'
import { useFilters } from '../../hooks/useFilters'
export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (e) => {
    setFilters(prevState => {
      return {
        ...prevState,
        minPrice: e.target.value
      }
    })
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    })
    )
  }

  return (
        <section className="filters">
            <div className="filter">
                <label htmlFor="{minPriceFilterId}">Price</label>
                <input
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
                <select name="category" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="headsets">Headsets</option>
                    <option value="laptops">Laptops</option>
                    <option value="speakers">Speakers</option>
                </select>
            </div>
        </section>
  )
}
