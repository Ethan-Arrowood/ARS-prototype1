import React, { Component } from 'react';
import * as Redux from 'react-redux';
import firebase from 'firebase';
// import components
import VerifyAccount from 'auth/VerifyAccount';
import LogInSignUp from 'auth/LogInSignUp';

// import styles
require('styles/Auth.scss');

class Auth extends Component {

  render() {
    return (
      <div className="auth-container">
        {this.props.children}
      </div>
    );
  }
};

export default Redux.connect()(Auth);
