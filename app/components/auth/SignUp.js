import React, { Component } from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';
import $ from 'jquery';

require('../styles/SignUp.scss');

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      cpassword: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});

    if ( event.target.name === 'cpassword' ) {
      if ( event.target.value !== this.state.password ) $("[name=cpassword]").toggleClass('notSame', true);
      else $("[name=cpassword]").toggleClass('notSame', false).toggleClass('same');
    }

  }

  handleSubmit(event) {
    event.preventDefault();

    const { email, password, cpassword } = this.state;
    const { dispatch } = this.props;
    
    if ( email !== undefined && password !== undefined && cpassword !== undefined ) {
     const emailRegex = /[a-zA-Z0-9!#$%&'*+-\/=?^_`{|}~.]+[@][a-z]+[.][a-z]+/;
     const passwordRegex = /[a-zA-Z0-9!#$%&'*+-\/=?^_`{|}~.@]{6,}/;

     const isEmailValid = email.match(emailRegex);
     const isPasswordValid = password === cpassword ? password.match(passwordRegex) : false;

     if ( isEmailValid && isPasswordValid ) {

       console.log(`dispatch(actions.signUp(${email}, ${password}));`)
       dispatch(actions.signUp(email, password));

       $("[name=email], [name=password], [name=cpassword]").val('');
     } else {
       $("#error").html("<p>User Error</p>");
     }
   } else {
     if ( email === undefined ) $("[name=email]").focus();
     else if ( password === undefined ) $("[name=password]").focus();
     else if ( cpassword === undefined ) $("[name=cpassword]").focus();
   }
  }

  render() {
    return (
      <form className="form-sign-up animated" onSubmit={this.handleSubmit}>

        <input
          name="email"
          placeholder="Email"
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <input
          name="password"
          placeholder="Password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <input
          name="cpassword"
          placeholder="Confrim Password"
          type="password"
          value={this.state.cpassword}
          onChange={this.handleChange}
        />

        <input name="signup" className="btn" type="submit" value="SignUp" />

        <div className="error" id="error"></div>
      </form>
    )
  }
}

export default Redux.connect()(SignUp);
