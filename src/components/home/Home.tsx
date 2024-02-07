
import { products } from '../../mocks/products.json'
import { ProductHome, FooterBanner, Banner } from "../globals"

export const Home = () => {

    return (
        <main className="home">
            <Banner />
            <div className="products-heading">
                <h2>Best Electronics Articles and more!</h2>
                <p>Speakers, phones, laptops, tablets of many variations</p>
            </div>

            <div className="products-container">
                {products?.slice(0, 5).map((product) =>
                    <ProductHome key={product.id} product={product} />
                )}
            </div>

            <FooterBanner />
        </main>
    )
}