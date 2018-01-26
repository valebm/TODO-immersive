/*
    ./client/index.js
    which is the webpack entry file
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './components/store'
import App from './components/App.js';


ReactDOM.render(  <Provider store={store}><App /></Provider>, document.getElementById('root'));
