import React, { Component } from 'react';
import * as Redux from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        {/* This is how we load the IndexRoute LogInSignUp component */}
      </div>
    )
  };
};

export default Redux.connect()(App);
