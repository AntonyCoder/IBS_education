import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import 'reset-css';
import './styles/global.scss'

const rootElement = document.getElementById('root');

if(!rootElement) {
    throw new Error('Root элемент не найден!');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);