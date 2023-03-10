import React from 'react';
import ReactDOM from 'react-dom';
import './scss/null.scss'
import './scss/slider.scss'
import './scss/style.scss'
import store from './store/store'
import App from './App';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
          <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


