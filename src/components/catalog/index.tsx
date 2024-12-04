import React from "react";
import { useSelector } from "react-redux";
import CatalogItem from "@components/catalogCard/index";
import './catalog.styles.scss';
import { Status } from "@enums/status.enums";

interface CatalogItemType {
    id: string;
    name: string;
    price: { value: number; currency: string };
    picture: { path: string; alt: string };
    like: boolean;
}

interface CatalogState {
    filteredItems: CatalogItemType[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}


const Catalog: React.FC = () => {
    const { filteredItems, status, error } = useSelector((state: { catalog: CatalogState }) => state.catalog);

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
