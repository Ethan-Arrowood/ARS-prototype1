import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import {hashHistory} from 'react-router';
import * as actions from 'actions';
const store = require('configureStore').configure();
import router from '../app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('user: ', user);
    store.dispatch(actions.login(user.uid));

    if (user.emailVerified) {

      const uid = user.uid;
      hashHistory.push('/dashboard');
    } else {

      hashHistory.push('/auth/verifyAccount');
    }

  } else {

    store.dispatch(actions.logout());
    hashHistory.push('/auth/logInSignUp');
  }
});

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root')
);
