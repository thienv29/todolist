import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './style.scss'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
  <React.StrictMode>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

