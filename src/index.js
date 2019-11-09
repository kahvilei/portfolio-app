import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { createBrowserHistory } from "history";
import './index.css';
import App from './App';

const hist = createBrowserHistory();

const clientRender = () => {
    ReactDOM.render(
        <BrowserRouter history = {hist} basename = "/"><App/></BrowserRouter>, document.getElementById('root'));
};


const serverRender = () => {};

if (typeof window === 'object') {
    clientRender();
} else {
    serverRender();
};

