import React from 'react'
import { StyledLink } from '../StyledLinks'

const ProductHome = ({ product }: any) => {
    return (
        <>
            <ul>


                <StyledLink to={`/products/${product.id}`}>
                    <div className="product-card">
                        <img className='product-image' src={product.image[0]} alt="" />
                        {product.name}
                    </div>
                </StyledLink>

            </ul >
            <div>
            </div>
        </>
    )
}

export default ProductHome
