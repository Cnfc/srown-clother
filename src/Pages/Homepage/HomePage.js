import React from "react";
import { connect } from "react-redux";

import Directory from "../../components/directory";
import "./HomePage.scss";

const HomePage = props => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <button onClick={console.log(props.cart)}>Click</button>

    <Directory />
  </div>
);

const mapStateToProps = state => {
  return {
    user: state.user,
    cart: state.cart.cart
  };
};

export default connect(mapStateToProps)(HomePage);
