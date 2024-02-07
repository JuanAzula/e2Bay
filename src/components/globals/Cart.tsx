import { useId } from "react"
import { useCart } from "../../hooks/useCart"


function CartItem({ image, price, name, quantity, addToCart }) {
    return (
        <li>
            <img
                src={image}
                alt={name}
            />
            <div>
                <strong>{name}</strong>
                <span>{price}</span>
            </div>
            <footer>
                <small>
                    Qty:{quantity}
                </small>
                <button onClick={addToCart}>
                    +
                </button>
            </footer>
        </li>
    )
}

const Cart = () => {
    const { addToCart, removeFromCart, cart } = useCart()

    const cartCheckboxId = useId()

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }
    return (
        <div>
            <main className="products">
                <label className="cart-button" htmlFor={cartCheckboxId}>
                    🛒
                </label>
                <input type="checkbox" id={cartCheckboxId} hidden />

                <aside className="cart">
                    <ul>
                        {cart.map(product => (
                            <CartItem
                                key={product.id}
                                addToCart={() => addToCart(product)}
                                {...product}
                            />
                        ))}
                    </ul>
                    <button onClick={removeFromCart}>
                        ❌🛒
                    </button>
                </aside>
            </main>
            )
        </div>
    )
}

export default Cart
