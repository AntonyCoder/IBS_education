import React from "react";
import Product from '@components/product/index';
import MainLayout from "@layouts/mainLayout";

const ProductPage: React.FC = () => {
    return (
        <MainLayout>
            <Product />
        </MainLayout>
    )
}

export default ProductPage;