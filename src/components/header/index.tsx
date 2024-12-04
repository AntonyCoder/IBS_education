import React, { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog, filterItems } from "@slices/catalogSlice";
import setDebounce from "@utils/debounce";
import shoppingCart from "@svg/shopping_cart.svg";
import account from "@svg/account_circle.svg";
import { AppDispatch } from "src/store";
import './header.styles.scss';

interface CatalogState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const Header: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [searchQuery, setSearchQuery] = useState<string>('');

    const { status } = useSelector((state: { catalog: CatalogState }) => state.catalog);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCatalog());
        }
    }, [status, dispatch]);

    const handleSearch = setDebounce((query: string) => {
        dispatch(filterItems(query));
    }, 1000);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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