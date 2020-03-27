import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import HomePage from "Pages/Homepage";
import ShopPage from "Pages/ShopPage";
import Checkout from "Pages/checkout";
import Header from "components/Header";
import SignInAndSignUpPage from "Pages/SignIn_Signup";
import Contact from "Pages/Contact";
import ReduxPage from "Pages/Redux";
import Clip from "Pages/Clip";
import Hooks from "Pages/Hooks";
import { checkUserSession } from "redux/user/user.actions";
import { selectCurrentUser } from "redux/user/user.selectors";

import { GlobalStyle } from "./global.styles";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/clip" component={Clip} />
        <Route path="/contact" component={Contact} />
        <Route path="/redux" component={ReduxPage} />
        <Route path="/hooks" component={Hooks} />
        <Route path="/contact/:courseid" component={Contact} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatch = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatch)(App);
