import React from "react";
import { connect } from "react-redux";

import {
  showHomeItem,
  addHomeItem,
  minusHomeItem
} from "redux/home/home.actions";
import Directory from "components/Directory";
import "./HomePage.scss";

const HomePage = ({ homeItem, showHomeItem, addHomeItem, minusHomeItem }) => {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage </h1>
      <Directory />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    cart: state.cart.cart,
    homeItem: state.homeItem
  };
};

const mapDispatchToProps = dispatch => ({
  showHomeItem: () => dispatch(showHomeItem()),
  addHomeItem: () => dispatch(addHomeItem()),
  minusHomeItem: () => dispatch(minusHomeItem())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
