import { useParams } from 'react-router-dom'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai'
import ProductHome from './ProductHome'
import { useCart } from '../../hooks/useCart'

export const ProductDetail = ({ products }) => {
  const { productId } = useParams()
  const foundProduct = products.find((product) =>
    product.id === productId
  )
  const { cart, addToCart, decreaseQuantity } = useCart()
  const ProductinCart = cart.find((product) => product.id === productId)
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
                                                <span className="minus" onClick={() => decreaseQuantity(foundProduct)}><AiOutlineMinus /></span>
                                                <span className="num">{ProductinCart ? ProductinCart.quantity : 0}</span>
                                                <span className="plus" onClick={() => addToCart(foundProduct)}><AiOutlinePlus /></span>
                                            </p>
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
                                            {products.map((item) => (
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
