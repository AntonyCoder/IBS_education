import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorProvider } from "./components/modalError/errorContext";
import 'reset-css';
import './styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ErrorProvider>
            <App />
        </ErrorProvider>
    </React.StrictMode>
);