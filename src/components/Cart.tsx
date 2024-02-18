import React, { useEffect, useId, useRef, useState } from 'react'
import { useCart } from '../hooks/useCart'
import PayPalButton from './PaypalButton'
import { type JSX } from 'react/jsx-runtime'
import { type Product } from '../interfaces/productsType'

interface CartItemProps {
  image: ''
  price: 0
  name: ''
  quantity: 0
  product: ''
  setPrice: (arg0: string | null) => void
  addToCart: () => void
  decreaseQuantity: () => void
  removeFromCart: (arg0: string) => void
}

function CartItem ({ image, price, name, quantity, addToCart, decreaseQuantity, removeFromCart, product, setPrice }: CartItemProps) {
  const updateTotalPrice = () => {
    setTimeout(() => {
      setPrice(window.localStorage.getItem('totalPrice'))
    }, 100)
  }
  return (
        <li className="cart-container">
            <img className="product-cart-image"
                src={image[0]}
                alt={name}
            />
            <div>
                <strong>{name}</strong>
                <br />
            </div>
                <span style={{ marginLeft: '4.9%' }}>${price}</span>
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

  const checkProductInCart = () => {
    return cart.some()
  }

  const handleClickOutsideCart = (event: MouseEvent) => {
    if (cartWrapperRef.current && event.target !== document.getElementById(cartContainerId) &&
            !cartWrapperRef.current.contains(event.target) && event.target !== document.getElementById(cartSvgId)) {
      setCartVisible(false)
      console.log(window.localStorage.getItem('totalPrice'))
      setTotalPrice(window.localStorage.getItem('totalPrice'))
    }
  }

  useEffect(() => {
    if (!checkProductInCart) {
      setCartVisible(false)
    }
    document.addEventListener('click', handleClickOutsideCart)
    return () => {
      document.removeEventListener('click', handleClickOutsideCart)
    }
  }, [])

  return (
        <div>
            <button className='cart-icon' type='button' style={{ marginLeft: '10px', cursor: 'pointer' }}>
                <svg id={cartSvgId} onClick={toggleCartVisibility} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="32" height="32" viewBox="0 0 24 24" strokeWidth="0.9" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                </label>
                <input type="checkbox" id={cartCheckboxId} hidden />

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
                                    {...product}
                                />

                            </>
                        ))}
                        <button className='cart--clear' onClick={() => { clearCart(); setTotalPrice('0') }}>Clear cart</button>
                        <span>Total: {`$${totalPrice}`}</span>
                        <PayPalButton totalValue={totalPrice} invoice='apple' />
                    </ul>
                </aside>
            </main>
        </div >
  )
}

export default Cart
