import { Link } from 'react-router-dom'
import { useSearch } from '../../hooks/useSearch'
import { type Product } from '../../interfaces/productsType'
import { StyledSearchbar } from '../StyledSearchbar'

function SearchBar ({ products }: { products: Product[] | undefined }) {
  const { setSearchTerms, searchProducts, searchedProducts, setSearchedProducts } = useSearch()
  // const [searchValue, setSearchValue] = useState('')
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value
    console.log('valor de busqueda', searchTerm)

    console.log('searchterm:', searchTerm)

    if (searchTerm.length !== 0) {
      setSearchTerms(searchTerm)
      searchProducts(products)
    } else {
      console.log('está vacío')
      searchProducts([])
      localStorage.removeItem('searchedProducts')
      // setSearchedProducts([])
      setSearchTerms('')
    }
  }

  console.log('bobi', searchedProducts)

  return (
        <div className="searchbar">
            <StyledSearchbar type="search" placeholder="Search..." onChange={handleSearch} />
            <div className='searchbar--products'>
              {searchedProducts?.map((product) => (
                <div key={product.id} >
                  <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt="" />
                  {product.name}
                  </Link>
                </div>
              ))}
              </div>
            {/* {searchedProducts && searchedProducts.length > 0 && (
                <ul>
                    {searchedProducts.map((product) => (
                        <li key={product.id}>
                            {/* Use Link to navigate to the product detail route */}
                            {/* <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
  )
}

export default SearchBar
