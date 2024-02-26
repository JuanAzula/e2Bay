// import './Products.css'
import { SearchProvider } from '../../context/search.tsx'
import { type ProductsType } from '../../interfaces/productsType.ts'
import { StyledLink } from '../StyledLinks.ts'
import { Filters } from './Filters.tsx'
import SearchBar from './SearchBar.tsx'

export function Products ({ products }: { products: ProductsType['products'] | undefined }) {
  return (

        <main className="products">
            <SearchProvider>
                <SearchBar products={products} />
            </SearchProvider>
            <Filters />

            <ul>
                {products?.map((product) => {
                  return (
                        <li key={product.id}>
                            <StyledLink to={`/products/${product.id}`}>
                                <img className="products__img" src={product.image}
                                    alt={product.name}
                                />
                            </StyledLink>
                                <div>
                                <StyledLink to={`/products/${product.id}`}>
                                    <strong>{product.name}</strong> <span>${product.price}</span>
                                </StyledLink>
                                </div>
                        </li>
                  )
                })}
            </ul>
        </main>
  )
}
