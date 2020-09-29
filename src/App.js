import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 
"react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="">
      <Switch>
      <Route path="/Login">
        <Header/>
        <Login/>
        </Route>
        <Route path="/checkout">
        <Header/>
        <Checkout/>
        </Route>
        <Route path="/">
        <Header/>
        <Home/>
        </Route>
        
         </Switch>
         </div>
         </Router>
  );
}

export default App;
