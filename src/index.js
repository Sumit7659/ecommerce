import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import {Provider} from  'react-redux'
import { ecommerce } from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ecommerce}>
    <App />
  </Provider>
);
