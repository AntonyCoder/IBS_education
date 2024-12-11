import React, { useEffect, useMemo } from "react";
import { fetchCatalog } from "@slices/catalogSlice/catalogSlice";
import CatalogItem from "@components/catalogCard/index";
import { Status } from "@enums/status.enums";
import { CatalogWrapper, CatalogItems } from "./catalog.styled";
import { useAppDispatch, useAppSelector } from "@utils/hooks";

const Catalog: React.FC = () => {
    const dispatch = useAppDispatch();
    const { items, status, error, searchQuery } = useAppSelector((state) => state.catalog);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCatalog());
        }
    }, [status, dispatch]);

    const filteredItems = useMemo(() => {
        const query = searchQuery.toLowerCase();
        return items.filter((item) => item.name.toLowerCase().includes(query));
    }, [items, searchQuery]);

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
