import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { createBrowserHistory } from "history";
import './index.css';
import App from './App';

const hist = createBrowserHistory();

const clientRender = () => {
    ReactDOM.render(
        <HashRouter history = {hist} basename = "/"><App/></HashRouter>, document.getElementById('root'));
};


const serverRender = () => {};

if (typeof window === 'object') {
    clientRender();
} else {
    serverRender();
};

