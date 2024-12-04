import React from "react";
import { useSelector } from "react-redux";
import CatalogItem from "../catalogCard/catalogCard";
import './catalog.scss';
import { Status } from "@const/status.constants";

const Catalog = () => {
    const { filteredItems, status, error } = useSelector((state) => state.catalog);

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
        <section className="catalog">
            <div className="catalog-items">
                {filteredItems.map((item) => (
                    <CatalogItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default Catalog;
