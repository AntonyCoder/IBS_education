import { InputAdornment } from "@mui/material";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog, filterItems } from "@slices/catalogSlice/catalogSlice";
import setDebounce from "@utils/debounce";
import { ICatalogState } from "@slices/catalogSlice/types";
import { AppDispatch } from "src/store";
import { StyledInput, StyledSearchIcon } from "./search.styled";

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
        <StyledInput
            type="search"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleInputChange}
            startAdornment={
                <InputAdornment position="start">
                    <StyledSearchIcon />
                </InputAdornment>
            } />
    )
}

export default Search;