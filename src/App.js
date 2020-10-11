import React, { useState , useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Login from "./Login";
import Carousel from "./Carousel";
import ProductCard from "./ProductCard";
import Section from "./Section";
import PopUpLogin from "./PopUpLogin";
import FooterComponent from "./FooterComponent";
import DetailedProductView from './DetailedProductView';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SplashScreen from './SplashScreen'


import img1 from './images/blockProductImage/blockimageTop1.webp';
import img2 from './images/blockProductImage/blockimageTop2.webp';
import img3 from './images/blockProductImage/blockImageTop3.webp';
import img4 from './images/blockProductImage/blockImagetop4.webp';
import img5 from './images/blockProductImage/blockimageTop5.webp';

import secondRowImg1 from './images/blockProductImage/blockImageSecond1.webp';
import secondRowImg2 from './images/blockProductImage/blockImageSecond2.webp';
import secondRowImg3 from './images/blockProductImage/blockImageSecond3.webp';
import secondRowImg4 from './images/blockProductImage/blockImageSecond4.webp';
import secondRowImg5 from './images/blockProductImage/blockImageSecond5.webp';


let firstLoad = 0;

function App() {
  sessionStorage.setItem('loadedOnce',false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [splashScreen, setSplashScreen] = useState(true);

  const imgUp = [img1,img2,img3,img4,img5];

  const imgBottom = [secondRowImg1,secondRowImg2,secondRowImg3,secondRowImg4,secondRowImg5];

  const popUpHandler = (prevState) => {
    console.log("showPopUp called", showPopUp);
    const currentValue = prevState.showPopUp;
    setShowPopUp(!showPopUp);
  };

  useEffect(() => {
    
    const timer = setTimeout(() => {
       
      setSplashScreen(false);
     console.log(sessionStorage.getItem('loadedOnce') );
     sessionStorage.setItem('loadedOnce',true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

 
    if(splashScreen) 
    {  
       
       return (<SplashScreen/>)
    }


  const  clickHandler = () => {
    console.log('Heyt you clicked me bro');
    const url = 'https://secureservice-env.eba-mpkiqwp5.ap-south-1.elasticbeanstalk.com/get';
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  }

return(

    <Router>
      <div className="App">
        <Navbar showPopUp={popUpHandler} />

        {showPopUp && <PopUpLogin />}


        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/productDetails">
            <DetailedProductView/>
          </Route>
          <Route path="/">
          <button className="hard-margin-top" onClick={clickHandler}>Click</button>
           {/* <Carousel />
            <hr />
            
            <Section title="Deals Of The Day" />
            <ProductCard blockType={'top'} imgs={imgUp}/>
            <hr/>
            <Section title="Trending This season" />
            <ProductCard blockType={'bottom'} imgs={imgBottom}/>
            <hr/>
            <Section title="Trending This season" />
            <ProductCard blockType={'bottom'} imgs={imgBottom}/>
            <hr/>
          
           <Section title="Top Trending of the Week"/>
           <ProductCard variant="top-trending-of-week"/>
           <Section title="Handpicked for you"/>
           <ProductCard variant="hand-picked-for-you"/>
           <Section title="Seasonal Bonanza"/>
           <ProductCard variant="seasonal-bonanza"/>
           <Section title="Recommended for you "/>
           <ProductCard variant="recommended-for-you"/>
           */}
          </Route>
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
