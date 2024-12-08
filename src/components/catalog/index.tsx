import React from "react";
import { useSelector } from "react-redux";
import CatalogItem from "@components/catalogCard/index";
import { ICatalogState } from "@slices/catalogSlice/types";
import { Status } from "@enums/status.enums";
import { CatalogWrapper, CatalogItems } from "./catalog.styled";

const Catalog: React.FC = () => {
    const { filteredItems, status, error } = useSelector((state: { catalog: ICatalogState }) => state.catalog);

    if (status === Status.Loading) {
        return <p>Загрузка...</p>;
    }

    if (status === Status.Failed) {
        return <p>Error: {error}</p>;
    }

    if (!filteredItems || !filteredItems.length) {
        return (
            <div className="catalog-items">
                <p>Товары не найдены.</p>
            </div>
        );
    }

    return (
        <CatalogWrapper>
            <CatalogItems>
                {filteredItems.map((item) => (
                    <CatalogItem key={item.id} item={item} />
                ))}
            </CatalogItems>
        </CatalogWrapper>
    );
};

export default Catalog;
