import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reducer from './reducer';
import { Provider } from 'react-redux'; // odpowiada za {connect}
import { createStore } from 'redux';

import addComment from './actions';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('przykładowy komentarz'));

export default store;
