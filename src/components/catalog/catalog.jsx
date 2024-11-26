import React from "react";
import CatalogItem from "../catalogItem/catalogItem";
import './catalog.scss';

const Catalog = ({ items }) => {

    return (
        <section className="catalog">
            <div className="catalog-items">
                {items.length > 0 ? (
                    items.map((item) => (
                        <CatalogItem key={item.id} item={item} />
                    ))
                ) : (
                    <p>Товары не найдены.</p>
                )}
            </div>
        </section>
    )
}

export default Catalog
