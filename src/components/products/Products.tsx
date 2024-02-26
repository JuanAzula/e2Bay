// import './Products.css'
import { SearchProvider } from '../../context/search.tsx'
import { type ProductsType } from '../../interfaces/productsType.ts'
import { StyledCard } from '../StyledCard.ts'
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

            <ul className='card-container'>
                {products?.map((product) => {
                  return (
                        <StyledCard key={product.id}>
                            <StyledLink to={`/products/${product.id}`}>
                                <img className="products__img" src={product.image}
                                    alt={product.name}
                                />
                                <div>
                                    <strong>{product.name}</strong> <span>${product.price}</span>
                                </div>
                                </StyledLink>
                        </StyledCard>
                  )
                })}
            </ul>
        </main>
  )
}
