import React from "react";
import Catalog from '@components/catalog/index';
import MainLayout from "@layouts/mainLayout";


const CatalogPage: React.FC = () => {
    return (
        <MainLayout>
            <Catalog />
        </MainLayout>

    )
}

export default CatalogPage;