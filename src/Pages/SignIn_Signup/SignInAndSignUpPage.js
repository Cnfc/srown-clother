import React, { Component } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import { SignInAndSignUpContainer } from "./SignInAndSignUpPage.styled";

class SignInAndSignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
      </SignInAndSignUpContainer>
    );
  }
}

export default SignInAndSignUpPage;
