import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import addComment from './actions';

import reducer from './reducer';
import { Provider } from 'react-redux'; // odpowiada za {connect}
import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';

const store = createStore(
  reducer,
  DevTools.instrument()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('przykładowy komentarz'));

export default store;
