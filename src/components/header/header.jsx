import React, { useState, useEffect } from "react";
import fetchCatalogListData from "@api/api";
import initSearch from "../../js/search";
import './header.scss';

const Header = ({ onFilter }) => {
    const [searchQuery, setSearchQuery] = useState(''); // Текущий поисковый запрос
    const [items, setItems] = useState([]); // Все товары

    // Загрузка всех товаров
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCatalogListData();
                setItems(data);
                onFilter(data); // Передаем все товары в родительский компонент (App)
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };
        fetchData();
    }, [onFilter]);

    // Инициализация функции для поиска с debounce
    const handleSearch = initSearch(items, onFilter, 1000);

    // Обработчик изменения поискового запроса
    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        handleSearch(query); // Запускаем фильтрацию
    };

    // Фокус на поле поиска
    const handleFocus = () => {
        handleSearch(searchQuery); // Активируем фильтрацию при фокусе
    };

    return (
        <header className="header">
            <div className="header__search-wrapper">
                <input
                    type="search"
                    className="search-field"
                    placeholder="Search products"
                    value={searchQuery}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                />
            </div>
            <div className="header__icon-wrapper">
                <a href="#" className="btn">
                    <img src="../src/assets/svg/shopping_cart.svg" alt="shopping-cart" />
                </a>
                <a href="#" className="btn">
                    <img src="../src/assets/svg/account_circle.svg" alt="account" />
                </a>
            </div>
        </header>
    );
};

export default Header;