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
import SplashScreen from './SplashScreen';
import Category from './Category';




let firstLoad = 0;

function App() {
  sessionStorage.setItem('loadedOnce',false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [splashScreen, setSplashScreen] = useState(true);

  const imgUp = 
  ['https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductBlocks/blockimageTop1.webp'
    ,'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductBlocks/blockimageTop2.webp',
    'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductBlocks/blockImageTop3.webp',
    'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductBlocks/blockImagetop4.webp',
    'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductBlocks/blockimageTop5.webp'];

  const imgBottom = 
  ['https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductBlocks/blockImageSecond1.webp',
  'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductBlocks/blockImageSecond2.webp',
  'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductBlocks/blockImageSecond3.webp',
  'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductBlocks/blockImageSecond4.webp',
  'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductBlocks/blockImageSecond5.webp'];

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
          <Category/>
           <Carousel />
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
          {/*
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
