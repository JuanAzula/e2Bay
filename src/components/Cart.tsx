import React, { useId, useRef, useState } from 'react'
import { useCart } from '../hooks/useCart'
import PayPalButton from './PaypalButton'
import { type JSX } from 'react/jsx-runtime'
import { type Product } from '../interfaces/productsType'
import { Link } from 'react-router-dom'

interface CartItemProps {
  image: string
  price: number
  name: string
  quantity: number
  product: Product
  id: string
  setPrice: (arg0: string | null) => void
  addToCart: () => void
  decreaseQuantity: () => void
  removeFromCart: (arg0: Product) => void
}

function CartItem ({ image, price, name, quantity, addToCart, decreaseQuantity, removeFromCart, product, setPrice, id }: CartItemProps) {
  const updateTotalPrice = () => {
    setTimeout(() => {
      setPrice(window.localStorage.getItem('totalPrice'))
    }, 100)
  }
  return (
        <li className="cart-container">
          <Link to={`/products/${id}`}>
            <img className="product-cart-image"
                src={image}
                alt={name}
                />
                </Link>
            <div>
                <strong>{name}</strong>
                <br />
            </div>
                <span>${price}</span>
            <footer className="cart--quantity">
                <small>
                    Quantity: {quantity}
                </small>
                <button onClick={() => { decreaseQuantity(); updateTotalPrice() }}>
                    -
                </button>
                <button onClick={() => { addToCart(); updateTotalPrice() }}>
                    +
                </button>
            </footer>
            <button className="cart--remove" onClick={() => { removeFromCart(product); updateTotalPrice() }}>
                ❌🛒
            </button><br />
        </li>
  )
}

const Cart: React.FC = () => {
  const { addToCart, removeFromCart, decreaseQuantity, cart, clearCart, totalPrice, setTotalPrice } = useCart()

  const cartWrapperRef = useRef(null)

  const [cartVisible, setCartVisible] = useState(false)

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible)
    setTotalPrice(window.localStorage.getItem('totalPrice'))
  }

  const cartCheckboxId = useId()

  const cartSvgId = useId()

  const cartContainerId = useId()

  return (
        <div>
            <button className='cart-icon' type='button' style={{ marginLeft: '10px', cursor: 'pointer' }}>
                <svg id={cartSvgId} onClick={toggleCartVisibility} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="42" height="42" viewBox="0 0 24 24" strokeWidth="0.9" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
                <span className='cart-item-qty'>{cart?.length}</span>
            </button>
            <main id={cartContainerId} className={cartVisible ? 'cart-wrapper' : 'hide'}>
                <label className="cart-button" htmlFor={cartCheckboxId}>
                <input type="checkbox" id={cartCheckboxId} hidden />
                </label>

                <aside ref={cartWrapperRef} className={cartVisible ? 'cart' : 'hide'}>
                    <ul>
                        {cart.map((product: JSX.IntrinsicAttributes & Product) => (
                            <>
                                <CartItem
                                    key={product.id}
                                    addToCart={() => addToCart(product)}
                                    decreaseQuantity={() => decreaseQuantity(product)}
                                    removeFromCart={() => removeFromCart(product)}
                                    setPrice={setTotalPrice}
                                    product={product}
                                    {...product}
                                />

                            </>
                        ))}
                        <button className='cart--clear' onClick={() => { clearCart(); setTotalPrice('0') }}>Clear cart</button>
                        <span>Total: {`$${totalPrice}`}</span>
                        <PayPalButton totalValue={totalPrice} invoice='apple' clearCart={clearCart} />
                    </ul>
                </aside>
            </main>
        </div >
  )
}

export default Cart
