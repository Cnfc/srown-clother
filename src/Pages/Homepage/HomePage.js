import React from "react";

import Directory from "../../components/directory";

import "./HomePage.scss";
import { connect } from "react-redux";

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <button onClick={console.log("Clicked")}>Click</button>

    <Directory />
  </div>
);

export default connect()(HomePage);
