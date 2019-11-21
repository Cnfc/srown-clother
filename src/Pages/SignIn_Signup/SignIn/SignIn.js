import React, { Component } from 'react';

import './SignIn.scss';
import FormInput from '../FormInput';

class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }


  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' })
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value })


  }

  render() {
    const { email, password } = this.state
    console.log(this.state.email)
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>

        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" value={email} label={email} required handleChange={this.handleChange} />
          <label>Email</label>

          <FormInput name="password" value={password} label={password} required handleChange={this.handleChange} />
          <label>Password</label>

          <input type="submit" value="Submit Form" />
        </form>


      </div>
    );
  }
}

export default SignIn;