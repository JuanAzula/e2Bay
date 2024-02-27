import { Link } from 'react-router-dom'
import { type Cart } from '../interfaces/usersType'
import { useWishlist } from '../hooks/useWishlist'
import { StyledCard } from './StyledCard'

export default function Wishlist () {
  const { wishlist } = useWishlist()
  console.log(wishlist)

  const { removeFromWishlist } = useWishlist()

  if (wishlist.length === 0) {
    return (
            <div>
                <h1 className='wishlist--header'>Wishlist empty</h1>
            </div>
    )
  } else {
    return (
            <div>
                <h1 className='wishlist--header'>Wishlist</h1>
                <ul className='wishlist-container'>
                    {wishlist.map((product: Cart) => {
                      return (
                            <StyledCard key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                    <img src={product.image}
                                    className='products__img'
                                        alt={product.name}
                                    />
                                    <div>
                                        <strong>{product.name}</strong> - <span>${product.price}</span>
                                    </div>
                                </Link>
                                <div>
                                    <span>Stock:{product.stock}</span>
                                    <button className='wishlist--remove' onClick={() => removeFromWishlist(product)}>❌</button>
                                </div>
                            </StyledCard>
                      )
                    })}
                </ul>
            </div>
    )
  }
}
