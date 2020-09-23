import React from "react";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import "./App.css";
import Header from './Header'
import Login from './Login'
import Home from './Home'
import TestingWebServices from './TestingWebServices';

function App() {
  return (
   
    <Router>
      <div className="App">
        <div className="hard-margin"/>
        
      <Header/>
      <TestingWebServices/>
       <Switch>
         <Route path="/checkout">
            <h1>Checkout</h1>
         </Route>
         <Route path="/login">
            <Login/>
         </Route>
         <Route path="/">
            <Home/>
         </Route>
       </Switch>
     
      </div>
    </Router>
  );
}

export default App;
