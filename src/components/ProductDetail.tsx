import { useParams } from "react-router-dom";
import { AddToCartIcon } from "./Icons";


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
                                <li key={foundProduct.id}>
                                    <img className='product-image' src={foundProduct.image[0]} alt={foundProduct.name} />
                                    <div>
                                        <strong>{foundProduct.name}</strong> <span>${foundProduct.price}</span>
                                    </div>
                                    <p>{foundProduct.description}</p>
                                    <button>
                                        <AddToCartIcon />
                                    </button>
                                    <span>Stock:{foundProduct.stock}</span>
                                </li>
                            </ul>
                        </>
                    </div>
            }
        </>
    );
}