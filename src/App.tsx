import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorProvider } from "./components/modalError/errorContext";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/header/index";
import Product from "./components/product/index";
import Catalog from "./components/catalog/index";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ErrorProvider>
                <Router >
                    <Header />
                    <Routes>
                        <Route path="/" element={<Catalog />} />
                        <Route path="/product/:id" element={<Product />} />
                    </Routes>
                </Router>
            </ErrorProvider>
        </Provider>
    );
};

export default App;