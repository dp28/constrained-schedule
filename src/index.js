import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import store from './state/store';
import initialState from './state/example';
import { initialiseState } from './state/StateActionCreators';
import App from './app/App';
import './index.css';

store.dispatch(initialiseState(initialState));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
