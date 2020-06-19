import 'nprogress/nprogress.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Register from './register';
import * as serviceWorker from './serviceWorker';
import './styles/base.less';
ReactDOM.render(<App />, document.getElementById('root'), Register);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();