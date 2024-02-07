import { useId, useState } from "react"
import { useCart } from "../../hooks/useCart"

function CartItem({ image, price, name, quantity, addToCart, decreaseQuantity, removeFromCart, product }) {
    return (
        <li className="cart-container">
            <img className="product-cart-image"
                src={image[0]}
                alt={name}
            />
            <div>
                <strong>{name}</strong>
                <br />
                <span>${price}</span>
            </div>
            <footer>
                <small>
                    Qty:{quantity}
                </small>
                <button onClick={decreaseQuantity}>
                    -
                </button>
                <button onClick={addToCart}>
                    +
                </button>
            </footer>
            <button onClick={() => removeFromCart(product)}>
                ❌🛒
            </button><br />
            <button className="button">Buy now</button>
        </li>
    )
}

const Cart = ({ user }) => {
    const { addToCart, removeFromCart, decreaseQuantity, cart } = useCart()

    const [cartVisible, setCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
    };

    const cartCheckboxId = useId()

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }
    return (
        <div>
            <button className='cart-icon' type='button' onClick={toggleCartVisibility} style={{ marginLeft: '10px', cursor: 'pointer' }}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
            </svg>
                <span className='cart-item-qty'>{user?.cart?.length}</span>
            </button>
            <main className="cart-wrapper">
                <label className="cart-button" htmlFor={cartCheckboxId}>
                </label>
                <input type="checkbox" id={cartCheckboxId} hidden />

                <aside className={cartVisible ? 'cart' : 'hide'}>
                    <ul>
                        {cart.map(product => (
                            <>
                                <CartItem
                                    key={product.id}
                                    addToCart={() => addToCart(product)}
                                    decreaseQuantity={() => decreaseQuantity(product)}
                                    removeFromCart={() => removeFromCart(product)}
                                    {...product}
                                />

                            </>
                        ))}
                    </ul>
                </aside>
            </main>
        </div >
    )
}

export default Cart
