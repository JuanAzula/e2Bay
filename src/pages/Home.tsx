import { LoginForm } from "../components/Login"

import { products } from '../mocks/products.json'
import { client } from "../lib/client"
import { ProductH, FooterBanner, Banner } from "../components"

export const Home = () => {

    return (
        <main className="home">
            <Banner />
            <div className="products-heading">
                <h2>Best Electronics Store and more!</h2>
                <p>Speakers, phones, laptops, tablets of many variations</p>
            </div>

            <div className="products-container">
                {products.map((product) => {
                    return (
                        <div>
                            <strong>{product.name}</strong> <span>${product.price}</span>
                        </div>
                    )
                })}
                {/* {['Product 1', 'Product 2'].map(
                    (product) => product)} */}
            </div>

            <FooterBanner />
        </main>
    )
}