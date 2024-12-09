import React from "react";
import CatalogItem from "@components/catalogCard/index";
import { Status } from "@enums/status.enums";
import { CatalogWrapper, CatalogItems } from "./catalog.styled";
import { useAppSelector } from "@helpers/hooks";

const Catalog: React.FC = () => {
    const { filteredItems, status, error } = useAppSelector((state) => state.catalog);

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
