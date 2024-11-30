import React from "react";
import CatalogItem from "../catalogCard/catalogCard";
import './catalog.scss';

const Catalog = ({ items }) => {

    if(!items || !Array.isArray(items)){
        return;
    }
    if(items.length === 0) {
        return (
            <div className="catalog-items">
                <p>Товары не найдены.</p>
            </div>   
        )
    }

    return (
        <section className="catalog">
            <div className="catalog-items">
                {items.map((item) => (
                        <CatalogItem key={item.id} item={item} />
                    ))}
            </div>
        </section>
    );
};

export default Catalog;
