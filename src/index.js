import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux-store';

ReactDOM.render(
  <Provider store={store}>
    <App className="app" />
  </Provider>,
  document.getElementById('root')
);

console.log(`ENV: ${process.env.NODE_ENV}`)