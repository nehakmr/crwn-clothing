import React from 'react';
import './App.css';
import { Route, Router } from 'react-router-dom';
import HomePage from './components/pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={HatsPage}/> 
    </div>
  );
}

export default App;
