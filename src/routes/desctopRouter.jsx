import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/layout";
import Catalog from "../components/catalog/catalog";
import Product from "../components/product/product";

const DesctopRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Catalog />}/>
                <Route path="/product/:id" element={<Product />} />
            </Route>
        </Routes>
    )
}

export default DesctopRouter;