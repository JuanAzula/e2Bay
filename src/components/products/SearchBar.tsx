import { Link } from 'react-router-dom'
import { useSearch } from '../../hooks/useSearch'
import { type Product } from '../../interfaces/productsType'
import { StyledSearchbar } from '../StyledSearchbar'

function SearchBar ({ products }: { products: Product[] | undefined }) {
  const { setSearchTerms, searchProducts, searchedProducts } = useSearch()
  // const [searchValue, setSearchValue] = useState('')
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value
    console.log('valor de busqueda', searchTerm)

    console.log('searchterm:', searchTerm)

    if (searchTerm.length !== 0 && products !== undefined) {
      setSearchTerms(searchTerm)
      searchProducts(products)
    } else {
      console.log('está vacío')
      searchProducts([])
      localStorage.removeItem('searchedProducts')
      setSearchTerms('')
    }
  }

  console.log('bobi', searchedProducts)

  return (
        <div className="searchbar">
            <StyledSearchbar type="search" placeholder="Search..." onChange={handleSearch} />
            <div className='searchbar--products'>
              {searchedProducts?.map((product: { id: string, name: string, image: string }) => (
                <div key={product.id} >
                  <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt="" />
                  {product.name}
                  </Link>
                </div>
              ))}
              </div>
        </div>
  )
}

export default SearchBar
