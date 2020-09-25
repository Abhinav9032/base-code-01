import React from "react";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import "./App.css";
import Navbar from './Navbar'
import Login from './Login'
import Carousel from './Carousel'
import TestingWebServices from './TestingWebServices';

function App() {
  return (
   
    <Router>
      <div className="App">

    <Navbar/>
  
      
       <Switch>
         <Route path="/checkout">
            <h1>Checkout</h1>
         </Route>
         <Route path="/login">
            <Login/>
         </Route>
         <Route path="/">
           <Carousel/>
         </Route>
       </Switch>
     
      </div>
    </Router>
  );
}

export default App;
