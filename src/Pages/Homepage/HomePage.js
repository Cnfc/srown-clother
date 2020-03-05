import React from "react";
import { connect } from "react-redux";

import Directory from "components/Directory";
import "./HomePage.styles.js";
import { HomePageStyled } from "./HomePage.styles";

const HomePage = () => {
  return (
    <HomePageStyled>
      <h1>Welcome to my Homepage </h1>
      <Directory />
    </HomePageStyled>
  );
};

const mapStateToProps = state => {
  return {
    // user: state.user,
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
