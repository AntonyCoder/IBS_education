import React, { useState, useEffect }  from "react";
import Catalog from "./components/catalog/catalog";
import Header from "./components/header/header";
import fetchCatalogListData from '@api/api';

const App = () => {
    const [items, setItems] = useState([]); // Все товары
    const [filteredItems, setFilteredItems] = useState([]); // Отфильтрованные товары
    const [searchQuery, setSearchQuery] = useState(''); // Текущий поисковый запрос

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCatalogListData();
                setItems(data);
                setFilteredItems(data); // Изначально отображаем все товары
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };
        fetchData();
    }, []);

    // Функция для фильтрации товаров по поисковому запросу
    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = items.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    return (
        <>
            <Header searchQuery={searchQuery} onSearch={handleSearch} />
            <Catalog items={filteredItems} />
        </>
    );
};

export default App