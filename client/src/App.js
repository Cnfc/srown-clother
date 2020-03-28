import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Header from "components/Header";
import Spinner from "components/Spinner";
import { checkUserSession } from "redux/user/user.actions";
import { selectCurrentUser } from "redux/user/user.selectors";

import { GlobalStyle } from "./global.styles";

const HomePage = lazy(() => import("Pages/Homepage"));
const ShopPage = lazy(() => import("Pages/ShopPage"));
const Contact = lazy(() => import("Pages/Contact"));
const SignInAndSignUpPage = lazy(() => import("Pages/SignIn_Signup"));
const Checkout = lazy(() => import("Pages/checkout"));
const ReduxPage = lazy(() => import("Pages/Redux"));
const Clip = lazy(() => import("Pages/Clip"));
const Hooks = lazy(() => import("Pages/Hooks"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
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
