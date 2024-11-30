import React, { useState } from "react";
import Catalog from "./components/catalog/catalog";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/product/product";
import Header from "./components/header/header";
import { ErrorProvider } from "./components/modalError/errorContext";

const App = () => {
    const [filteredItems, setFilteredItems] = useState([]);

    return (
        <ErrorProvider>
            <Router >
                <Header onFilter={setFilteredItems} />
                <Routes>
                    <Route path="/" element={<Catalog items={filteredItems} />} />
                    <Route path="/product/:id" element={<Product />} />
                </Routes>
            </Router>
        </ErrorProvider>
    );
};

export default App;