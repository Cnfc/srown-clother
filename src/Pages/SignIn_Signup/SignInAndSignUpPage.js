import React, { Component } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import "./sign-in-and-sign-up.scss";

class SignInAndSignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInAndSignUpPage;
