import * as redux from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    auth: authReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? windowx.devToolsExtension() : f => f
  ));

  return store;
}