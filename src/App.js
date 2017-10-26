import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from './shoppingCart';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div id='application'>
        <div>
          <div id='wrapper'>
            <Header />
            <div id='main-section'>
              <ShoppingCart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
