import React, {useEffect, useState} from "react";
import './header.scss'

const Header = ({ searchQuery, onSearch }) => {
    const handleSearchChange = (e) => {
        onSearch(e.target.value); // Передаем запрос на фильтрацию в родительский компонент
    };

    return (
        <header className="header">
            <div className="header__search-wrapper">
                <input
                    type="search"
                    className="search-field"
                    placeholder="Search products"
                    value={searchQuery}
                    onChange={handleSearchChange}
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
}

export default Header;
