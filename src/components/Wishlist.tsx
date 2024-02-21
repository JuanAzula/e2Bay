import { Link } from 'react-router-dom'
import { type Cart, type User } from '../interfaces/usersType'

export default function Wishlist ({ user }: { user: User }) {
  console.log(user)
  if (!user) {
    return (
            <div>
                <h1>User Not Found</h1>
            </div>
    )
  } else {
    return (
            <div>
                <h1>Wishlist</h1>
                <ul>

                    {user.wishlist.map((product: Cart) => {
                      return (
                            <li key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                    <img style={{ width: '100px' }} src={product.image[0]}
                                        alt={product.name}
                                    />
                                    <div>
                                        <strong>{product.name}</strong> - <span>${product.price}</span>
                                    </div>
                                    <p>{product.description}</p>
                                    <span>Stock:{product.stock}</span>
                                </Link>
                            </li>
                      )
                    })}
                </ul>
            </div>
    )
  }
}
