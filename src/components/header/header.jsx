import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog, filterItems } from "@slices/catalogSlice";
import setDebounce from "@js/debounce";
import shoppingCart from "@svg/shopping_cart";
import account from "@svg/account_circle";
import './header.scss';

const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    const { status } = useSelector((state) => state.catalog);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCatalog());
        }
    }, [status, dispatch]);

    const handleSearch = setDebounce((query) => {
        dispatch(filterItems(query));
    }, 1000);  

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        handleSearch(query);
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