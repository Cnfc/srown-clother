import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/Homepage';
// import LayoutHeader from './HOC/LayoutHeader';
import ShopPage from './Pages/ShopPage';

import './App.css';
import Header from './components/Header';
import SignIn_Signup from './Pages/SignIn_Signup';


function App() {
  return (
    <div>
      <Header />

      <Switch >
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignIn_Signup} />

      </Switch>
    </div>
  );
}

export default App;
