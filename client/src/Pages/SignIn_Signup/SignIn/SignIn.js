import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../FormInput";
import CustomButton from "components/CustomButton";

import { googleSignInStart, emailSignInStart } from "redux/user/user.actions";

import {
  SigninContainer,
  SigninTitle,
  ButtonsBarContainer
} from "./SignIn.styled";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredential, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredential;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredential, [name]: value });
  };

  return (
    <SigninContainer>
      <SigninTitle>I already have an account</SigninTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            // onClick={signInWithGoogle}
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SigninContainer>
  );
};

const mapDispatch = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatch)(SignIn);
