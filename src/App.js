import React , {useState} from "react";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import "./App.css";
import Navbar from './Navbar'
import Login from './Login'
import Carousel from './Carousel'
import ProductCard from './ProductCard';
import Section from './Section';
import PopUpLogin from './PopUpLogin';
import FooterComponent from './FooterComponent'


function App() {
  const [showPopUp , setShowPopUp] = useState(false);

  const popUpHandler = (prevState) => {
      console.log('showPopUp called' , showPopUp);
      const currentValue = prevState.showPopUp;
      setShowPopUp(!showPopUp);
  }
  return (
   
    <Router>
      <div className="App">

    <Navbar showPopUp={popUpHandler}/>
  
  {showPopUp && <PopUpLogin/>}

      
       <Switch>
         <Route path="/checkout">
            <h1>Checkout</h1>
         </Route>
         <Route path="/login">
            <Login/>
         </Route>
         <Route path="/">
           <Carousel/>
           <hr/>
           <Section title="Deals Of The Night"/>
           <ProductCard/>
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
     <FooterComponent/>
      </div>
    </Router>
  );
}

export default App;
