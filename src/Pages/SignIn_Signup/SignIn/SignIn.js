import React, { Component } from 'react';
import { signInWithGoogle } from '../../../firebase/firebase.utils.js'

import FormInput from '../FormInput';
import CustomButton from '../CustomButton/CustomButton'

import './SignIn.scss';


class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className="buttons">
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with Gogole</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;