import { Link } from 'react-router-dom'
import { type Cart } from '../interfaces/usersType'
import { useWishlist } from '../hooks/useWishlist'

export default function Wishlist () {
  const { wishlist } = useWishlist()
  console.log(wishlist)

  const { removeFromWishlist } = useWishlist()

  if (wishlist.length === 0) {
    return (
            <div>
                <h1>Wishlist empty</h1>
            </div>
    )
  } else {
    return (
            <div>
                <h1>Wishlist</h1>
                <ul>
                    {wishlist.map((product: Cart) => {
                      return (
                            <li key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                    <img style={{ width: '100px' }} src={product.image}
                                        alt={product.name}
                                    />
                                    <div>
                                        <strong>{product.name}</strong> - <span>${product.price}</span>
                                    </div>
                                </Link>
                                    <p>{product.description}</p>
                                    <span>Stock:{product.stock}</span>
                                    <button onClick={() => removeFromWishlist(product)}>❌</button>
                            </li>
                      )
                    })}
                </ul>
            </div>
    )
  }
}
