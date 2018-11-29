import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/index";
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';

//import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
console.log(store)
ReactDOM.render(
    <Root />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
