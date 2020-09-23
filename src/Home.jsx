import React from 'react'
import './Home.css'
import bannerimage1 from './sareeBanner3.jpg';
import Product from './Product';
import prod1 from './ProductImages/prod1.jpg';
function Home() {
    return (
        <div className="home_banner">
            <img 
            src={bannerimage1}
            className="banner_image"
            alt="Banner"
            />

            
        </div>
    )
}

export default Home

