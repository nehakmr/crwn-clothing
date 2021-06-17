import React from 'react';
import './App.css';
import { Route, Router } from 'react-router-dom';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component'


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/> 
    </div>
  );
}

export default App;
