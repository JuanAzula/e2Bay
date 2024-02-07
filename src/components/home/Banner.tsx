import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='hero-banner-container'>
            <div>
                {/* <p className='beats-solo'>Sony 13TZ</p> */}
                <h3>SpringSummer</h3>
                <h1>SALE</h1>
                <img src="../src/assets/applevisionpro3.png" alt="headphones"
                    className='hero-banner-image' />
                <div>
                    <Link to="/products">
                        <button className='button' type='button'>SEE MORE</button>
                    </Link>
                    <div className='desc'>
                        <h5>APPLE VISION PRO</h5>
                        <p>The Game Changer arrives to the market</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
