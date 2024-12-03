import React, { useState } from "react";
import Catalog from "./components/catalog/catalog";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/product/product";
import Header from "./components/header/header";
import { ErrorProvider } from "./components/modalError/errorContext";
import { Provider } from "react-redux";
import store from "./store";

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