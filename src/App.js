import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

import HomePage from "./Pages/Homepage";
// import LayoutHeader from './HOC/LayoutHeader';
import ShopPage from "./Pages/ShopPage";

import "./App.css";
import Header from "./components/Header";
import SignIn_Signup from "./Pages/SignIn_Signup";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignIn_Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
