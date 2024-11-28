import React, { useState, useEffect } from "react";
import fetchCatalogListData from "@api/api";
import initSearch from "@js/search";
import shoppingCart from "@svg/shopping_cart";
import account from "@svg/account_circle";
import './header.scss';

const Header = ({ onFilter }) => {
    const [searchQuery, setSearchQuery] = useState(''); 
    const [items, setItems] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCatalogListData();
                setItems(data);
                onFilter(data); 
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };
        fetchData();
    }, [onFilter]);

    const handleSearch = initSearch(items, onFilter, 1200);

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        handleSearch(query);
    };

    const handleFocus = () => {
        handleSearch(searchQuery); 
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
                    <img src={shoppingCart} alt="shopping-cart" />
                </a>
                <a href="#" className="btn">
                    <img src={account} alt="account" />
                </a>
            </div>
        </header>
    );
};

export default Header;