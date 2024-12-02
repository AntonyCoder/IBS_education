import React from "react";
import { useSelector } from "react-redux";
import CatalogItem from "../catalogCard/catalogCard";
import './catalog.scss';

const Catalog = () => {
    const { filteredItems, status, error } = useSelector((state) => state.catalog);

    if (status === 'loading') {
        return <p>Загрузка...</p>;
    }


    if (status === 'failed') {
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
