import { useParams } from "react-router-dom";
import { AddToCartIcon } from "../Icons";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";


export const ProductDetail = ({ products }) => {
    const { productId } = useParams()
    const foundProduct = products.find((product) =>
        product.id == productId
    );
    return (
        <>
            {
                !foundProduct ?
                    <>
                        <div>
                            <h1>Product Not Found</h1>
                        </div>
                    </>
                    :
                    <div>
                        <h1>Product Detail</h1>
                        <>
                            <ul>
                                <li className="product-detail-container" key={foundProduct.id}>
                                    <div className="image-container">
                                        <img className="product-image" src={foundProduct.image[0]} alt={foundProduct.name} />
                                    </div>

                                    {/* <div className="small-image-container">

                                    </div> */}

                                    <div className="product-details-desc">
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
                                                <span className="minus" onClick=""><AiOutlineMinus /></span>
                                                <span className="num">0</span>
                                                <span className="plus"><AiOutlinePlus /></span>
                                            </p>
                                        </div>
                                        <div className="buttons">
                                            <button className="add-to-cart" type="button" onClick="">Add to Cart</button>
                                            {/* {
                                                wishlist?.wishlist.includes(foundProduct.id)
                                                ? <span className="num"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" stroke-width="0" fill="currentColor" />
                                                </svg></span>
                                                : <span className="num"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                            </svg></span>} */}
                                        </div>

                                    </div>


                                    {/* <div>
                                        <strong>{foundProduct.name}</strong> <span>${foundProduct.price}</span>
                                    </div>
                                    <p>{foundProduct.description}</p>
                                    <button>
                                        <AddToCartIcon />
                                    </button>
                                    <span>Stock:{foundProduct.stock}</span> */}
                                </li>
                            </ul>
                        </>
                    </div>
            }
        </>
    );
}