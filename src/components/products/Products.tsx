// import './Products.css'
import { FiltersProvider } from '../../context/filters.tsx'
import { ProductsType } from '../../interfaces/productsType.ts'
import { StyledLink } from '../StyledLinks.ts'
import { Filters } from './Filters.tsx'

export function Products({ products }: { products: ProductsType['products'] }) {

    return (

        <main className="products">
            <Filters />

            <ul>
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            <StyledLink to={`/products/${product.id}`}>
                                <img className="products__img" src={product.image[0]}
                                    alt={product.name}
                                />
                                <div>
                                    <strong>{product.name}</strong> <span>${product.price}</span>
                                </div>
                                {/* <button >

<AddToCartIcon />

</button> */}
                                {/* <p>{product.description}</p>
                            <span>Stock:{product.stock}</span> */}
                            </StyledLink>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}