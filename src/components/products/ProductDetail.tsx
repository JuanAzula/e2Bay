import { useParams } from 'react-router-dom'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai'
import ProductHome from './ProductHome'
import { useCart } from '../../hooks/useCart'
import { useState } from 'react'
import { useWishlist } from '../../hooks/useWishlist'
import { type Product, type ProductsType } from '../../interfaces/productsType'

export const ProductDetail = ({ products }: { products: ProductsType['products'] | undefined }) => {
  const { productId } = useParams()
  const foundProduct = products?.find((product) =>
    product.id === productId
  )
  const [liked, setLiked] = useState(false)
  const { cart, addToCart, decreaseQuantity, setTotalPrice } = useCart()
  const ProductinCart = cart.find((product: Product) => product.id === productId)

  const updateTotalPrice = () => {
    setTimeout(() => {
      setTotalPrice(window.localStorage.getItem('totalPrice'))
    }, 100)
  }

  const { addToWishlist } = useWishlist()
  return (
        <>
            {
                !foundProduct
                  ? <>
                        <div>
                            <h1>Product Not Found</h1>
                        </div>
                    </>
                  : <div>
                        <>
                            <ul>
                                <li className="product-detail-container" key={foundProduct.id}>
                                    <div className="image-container">
                                        <img className="product-image" src={foundProduct.image[0]} alt={foundProduct.name} />
                                    </div>

                                    {/* <div className="small-image-container">

                                    </div> */}

                                    <div className="product-detail-desc">
                                        <h1>{foundProduct.name}</h1>
                                        <div className="reviews">
                                            <div>
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiOutlineStar />
                                            </div>
                                            <p>(1119)</p>
                                        </div>
                                        <h4>Details: </h4>
                                        <p>{foundProduct.description}</p>
                                        <p className="price">
                                            ${foundProduct.price}
                                        </p>
                                        <div className="quantity">
                                            <h3>Quantity</h3>
                                            <p className="quantity-desc">
                                                <span className="minus" onClick={() => { decreaseQuantity(foundProduct); updateTotalPrice() }}><AiOutlineMinus /></span>
                                                <span className="num">{ProductinCart ? ProductinCart.quantity : 0}</span>
                                                <span className="plus" onClick={() => { addToCart(foundProduct); updateTotalPrice() }}><AiOutlinePlus /></span>
                                            </p>
                                            <button className='like-button' onClick={() => {
                                              setLiked(!liked)
                                              addToWishlist(foundProduct)
                                            }}>
                                                {liked
                                                  ? <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart-filled" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f20179" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                  <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" strokeWidth="0" fill="currentColor" />
                                                </svg>
                                                  : <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                                </svg>}
                                            </button>
                                        </div>
                                        <div className="buttons">
                                            <button className="add-to-cart"
                                                type="button"
                                                onClick={() => addToCart(foundProduct)}>Add to Cart</button>
                                            <button className="buy-now"
                                                type="button">Buy Now</button>
                                        </div>

                                    </div>

                                </li>
                                <div className="maylike-products-wrapper">
                                    <h2>You may also like</h2>
                                    <div className="marquee">
                                        <div className="maylike-products-container track">
                                            {products?.map((item) => (
                                                <ProductHome key={item.id} product={item} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </>
                    </div>
            }
        </>
  )
}
