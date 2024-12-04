import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "@layouts/mainLayout";
import CatalogLayout from "@pages/catalogPage";
import ProductLayout from "@pages/productPage";

const DesctopRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout><CatalogLayout /></MainLayout>} />
                <Route path="/product/:id" element={<MainLayout><ProductLayout /></MainLayout>} />
            </Routes>
        </Router >
    )
}

export default DesctopRouter;