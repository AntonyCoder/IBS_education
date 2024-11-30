import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'reset-css';
import './styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);