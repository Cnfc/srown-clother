import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "redux/user/user.selectors";

import HomePage from "Pages/Homepage";
import ShopPage from "Pages/ShopPage";
import Checkout from "Pages/checkout";
import Header from "components/Header";
import SignInAndSignUpPage from "Pages/SignIn_Signup";
import Contact from "Pages/Contact";
import ReduxPage from "Pages/Redux";
import Clip from "Pages/Clip";

import "./App.css";
import { checkUserSession } from "redux/user/user.actions";

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/clip" component={Clip} />
          <Route path="/contact" component={Contact} />
          <Route path="/redux" component={ReduxPage} />
          <Route path="/contact/:courseid" component={Contact} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatch = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatch)(App);
