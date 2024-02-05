import React from 'react';

import { urlFor } from '../lib/client';
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
                <div className="right">
                    <p>boat b6</p>
                    <h3>Offer!</h3>
                    <p>30%</p>
                    <Link to="/product/64c9faed738507dddfc7c73c">
                        <button type="button">buy now</button>
                    </Link>
                </div>

                <img style={{ width: '45%', marginLeft: '6%' }}
                    src='../src/assets/speaker4.webp' className="footer-banner-image"
                />
            </div>
        </div>
    )
}

export default FooterBanner