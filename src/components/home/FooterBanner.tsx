import { Link } from 'react-router-dom';

const FooterBanner = () => {
    return (
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
                    <p>30% of</p>
                    <h3>Speakers</h3>
                    <h3>Headphones</h3>
                    <p>20 Feb to 4 March</p>
                </div>
                <img
                    src='../src/assets/boatpods.webp' className="footer-banner-image"
                />
                <div className="right">
                    <p>boat b6</p>
                    <h3>Offer!</h3>
                    <p>30%</p>
                    <Link to="/products/f91eb86a8f6c94373d5e80a7c">
                        <button style={{ color: '#f20179' }} className='button--footer' type="button">buy now</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default FooterBanner