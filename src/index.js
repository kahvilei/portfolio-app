import React from 'react';
import ReactDOM from 'react-dom';
import {Router, HashRouter} from 'react-router-dom';
import { createBrowserHistory } from "history";
import './index.css';
import App from './App';

const hist = createBrowserHistory();

const clientRender = () => {
    ReactDOM.render(
        <Router history = {hist} basename = "portfolio-app/"><App/></Router>, document.getElementById('root'));
};


const serverRender = () => {};

if (typeof window === 'object') {
    clientRender();
} else {
    serverRender();
};

