import React, { Component } from 'react';
import * as Redux from 'react-redux';
import firebase from 'firebase';
import $ from 'jquery';

import LogInSignUpContainer from './LogInSignUp/LogInSignUpContainer.js';

require('./styles/LogInSignUp.scss');

class LogInSignUp extends Component {
  displayContainer() {
    const signedup = this.props.auth.signedup;
    console.log(signedup);
    if (signedup === undefined) {
      return (
        <LogInSignUpContainer/>
      )
    } else {
      return (
        <PleaseVerifyAccount/>
      )
    }
  }
  render() {
    console.log(this.props)
    return (
      <div className="outer-container">
        {this.displayContainer()}
      </div>
    );
  }
}
export default Redux.connect(
  (state) => {
    return state
  }
)(LogInSignUp);
