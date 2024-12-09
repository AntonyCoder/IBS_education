import { InputAdornment } from "@mui/material";
import React, { useState, useEffect, ChangeEvent } from "react";
import { fetchCatalog, filterItems } from "@slices/catalogSlice/catalogSlice";
import setDebounce from "@utils/debounce";
import { StyledInput, StyledSearchIcon } from "./search.styled";
import { useAppDispatch, useAppSelector } from "@helpers/hooks";

const Search: React.FC = () => {

    const dispatch = useAppDispatch();
    const [searchQuery, setSearchQuery] = useState<string>('');

    const status = useAppSelector((state) => state.catalog.status);

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