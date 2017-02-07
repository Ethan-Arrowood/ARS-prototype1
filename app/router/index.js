import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import App from 'App';

// Auth
import Auth from 'Auth';
import LogInSignUp from 'auth/LogInSignUp';
import VerifyAccount from 'auth/VerifyAccount';
import ForgotPassword from 'auth/ForgotPassword';

import Dashboard from 'Dashboard';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Auth}>
        <Route component={LogInSignUp}/>
        <Route component={VerifyAccount}/>
        <Route component={ForgotPassword}/>
      </IndexRoute>
      <Route path="dashboard" component={Dashboard}/>
      /* Note for future reference - 1/30/2017 10:00AM
       * When we start writing dashboard components
       * Make the above <Route /> into:
       * <Route> </Route>
       * And place component routes inside ^
       */
    </Route>
  </Router>
)
