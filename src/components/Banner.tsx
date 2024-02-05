import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='hero-banner-container'>
            <div>
                {/* <p className='beats-solo'>Sony 13TZ</p> */}
                <h3>SpringSummer</h3>
                <h1>SALE</h1>
                <img src="../src/assets/beats_solo.webp" alt="headphones"
                    className='hero-banner-image' />
                <div>
                    <Link to="/products/64c9faed738507dddfc7c73c">
                        <button type='button'>SEE MORE</button>
                    </Link>
                    <div className='desc'>
                        <h5>SONY 13TZ</h5>
                        <p>Best headphones on the market</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
