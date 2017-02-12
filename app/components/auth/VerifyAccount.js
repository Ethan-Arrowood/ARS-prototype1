import React, { Component } from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';
import firebase from 'firebase';
import { Link } from 'react-router';

class VerifyAccount extends Component {

  componentDidMount() {
    console.log('Verification Page');
    console.log('User: ', firebase.currentUser);
  }

  render() {
    return (
      <div>
        <p>Please Verify Your Account!</p>
        <p>Please click on the link we sent to your email.</p>
        <Link to="/auth/logInSignUp">Log In</Link>
      </div>
    );
  }
};

export default VerifyAccount;
