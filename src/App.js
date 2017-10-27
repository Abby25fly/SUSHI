import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from './shoppingCart';
import Header from './header';
import {dishes, shopDishes} from './dishes'
import Home from './Home'
import { connect } from 'redux-zero/react';
import Footer from './footer';

const App = ({dishes, shopDishes}) => {
  return (
    <div id='application' >
      <div>
        <div id='wrapper'>
          <Header shopDishes={shopDishes}/>
          <div id='main-section'>
            <ShoppingCart shopDishes={shopDishes} />
            <Home dishes={dishes} />
          </div>
          <Footer />
        </div>
      </div>
    </div >
  );
  console.log("dish",dishes);
}

//export default App;
const mapToProps = ({ dishes, shopDishes }) => ({ dishes, shopDishes });
export default connect(mapToProps)(App);