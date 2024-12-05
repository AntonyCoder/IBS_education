import React, { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog, filterItems } from "@slices/catalogSlice";
import setDebounce from "@utils/debounce";
import { AppDispatch } from "src/store";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Colors from "../../theme/varibles";
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
                <ShoppingCartOutlinedIcon
                        sx={{
                            color: Colors.primaryColor,
                            fontSize: "24px",
                        }} />
                </a>
                <a href="#" className="btn">
                    <AccountCircleOutlinedIcon
                        sx={{
                            color: Colors.primaryColor,
                            fontSize: "24px",
                        }} />
                </a>
            </div>
        </header>
    );
};

export default Header;