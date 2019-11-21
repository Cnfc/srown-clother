import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/Homepage';
// import LayoutHeader from './HOC/LayoutHeader';
import ShopPage from './Pages/ShopPage';

import './App.css';


function App() {
  return (
    <Switch >
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />


    </Switch>
  );
}

export default App;
