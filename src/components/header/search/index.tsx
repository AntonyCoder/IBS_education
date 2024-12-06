import { Input, InputAdornment } from "@mui/material";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog, filterItems } from "@slices/catalogSlice/catalogSlice";
import setDebounce from "@utils/debounce";
import { ICatalogState } from "@slices/catalogSlice/types";
import { AppDispatch } from "src/store";
import SearchIcon from '@mui/icons-material/Search';
import './search.styles.scss';

const Search: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [searchQuery, setSearchQuery] = useState<string>('');

    const { status } = useSelector((state: { catalog: ICatalogState }) => state.catalog);

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
        <Input
            type="search"
            className="search-field"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleInputChange}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon className="search-icon"/>
                </InputAdornment>
            } />
    )
}

export default Search;