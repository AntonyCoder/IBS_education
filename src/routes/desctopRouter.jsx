import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import CatalogPage from "@pages/catalogPage";
import ProductPage from "@pages/productPage";

const DesctopRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CatalogPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
        </Router >
    )
}

export default DesctopRouter;