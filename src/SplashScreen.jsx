import React from 'react';
import './SplashScreen.css';
import splashScreen from './images/splashScreen.jpeg';

function SplashScreen() {
    return (
        <div>
            <div className="splash-screen-container">
                <img className="splash-image" src='https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/splashScreen.jpeg' alt="Corona Fighters"/>
            </div>
            <div className="splash-screen-banner">
                <h1>We are fighting corona for you</h1>
            </div>
        </div>
    )
}

export default SplashScreen
