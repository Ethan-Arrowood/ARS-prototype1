import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import firebase from 'firebase';

const store = require('configureStore').configure();
import router from '../app/router/';

console.log(firebase.apps)
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root')
);
