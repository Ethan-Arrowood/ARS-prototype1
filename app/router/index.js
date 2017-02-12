import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import firebase from 'app/firebase';
import App from 'App';

// Auth
import Auth from 'Auth';
import LogInSignUp from 'auth/LogInSignUp';
import VerifyAccount from 'auth/VerifyAccount';
import ForgotPassword from 'auth/ForgotPassword';

import Dashboard from 'Dashboard';

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/auth/logInSignUp');
  }
  next();
}

const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/dashboard');
  }
  next();
}

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="auth" component={Auth} onEnter={redirectIfLoggedIn}>
        <Route path="logInSignUp" component={LogInSignUp}/>
        <Route path="verifyAccount" component={VerifyAccount}/>
        <Route path="ForgotPassword" component={ForgotPassword}/>
      </Route>

      <Route path="dashboard" component={Dashboard} onEnter={requireLogin}/>
      /* Note for future reference - 1/30/2017 10:00AM
       * When we start writing dashboard components
       * Make the above <Route /> into:
       * <Route> </Route>
       * And place component routes inside ^
       */
    </Route>
  </Router>
);
