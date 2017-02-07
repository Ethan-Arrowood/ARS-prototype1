import React, { Component } from 'react';
import * as Redux from 'react-redux';
import firebase from 'firebase';

// import components
import VerifyAccount from 'auth/VerifyAccount';
import LogInSignUp from 'auth/LogInSignUp';

// import styles
require('styles/Auth.scss');

class Auth extends Component {
  constructor(props) {
    super(props)
  }

  renderAuthComponent() {
    return firebase.user ? <VerifyAccount/> : <LogInSignUp/>;
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="auth-container">
        {this.renderAuthComponent()}
      </div>
    );
  }
};

export default Redux.connect(
  (state) => {
    return state
  }
)(Auth);
