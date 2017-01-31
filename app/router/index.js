import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import App from 'App';
import LogInSignUp from 'LogInSignUp';
import Dashboard from 'Dashboard';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LogInSignUp} />
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
