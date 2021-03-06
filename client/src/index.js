import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import 'materialize-css/dist/css/materialize.min.css';
import reduxThunk from "redux-thunk";

import App from "./components/App";
// Development only axios helper
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store = {store}><App /></Provider>, 
    document.querySelector('#root')
);

console.log("STRIPE KEY is ", process.env.REACT_APP_STRIPE_KEY);
