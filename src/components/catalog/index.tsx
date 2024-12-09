import React, { useEffect } from "react";
import { fetchCatalog, filterItems } from "@slices/catalogSlice/catalogSlice";
import CatalogItem from "@components/catalogCard/index";
import { Status } from "@enums/status.enums";
import { CatalogWrapper, CatalogItems } from "./catalog.styled";
import { useAppDispatch, useAppSelector } from "@utils/hooks";
import setDebounce from "@utils/debounce";

const Catalog: React.FC = () => {
    const dispatch = useAppDispatch();
    const { filteredItems, status, error, searchQuery } = useAppSelector((state) => state.catalog);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCatalog());
        }
    }, [status, dispatch]);

    useEffect(() => {
        const debounceFilter = setDebounce((query: string) => {
            dispatch(filterItems(query));
        }, 1000);

        debounceFilter(searchQuery);
    }, [searchQuery, dispatch]);

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
