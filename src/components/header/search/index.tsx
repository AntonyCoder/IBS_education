import { InputAdornment } from "@mui/material";
import React, { ChangeEvent, useState, useCallback } from "react";
import { StyledInput, StyledSearchIcon } from "./search.styled";
import { useAppDispatch } from "@utils/hooks";
import { setSearchQuery } from "@slices/catalogSlice/catalogSlice";
import setDebounce from "@utils/debounce";

const Search: React.FC = () => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState<string>("");

    const debouncedDispatch = useCallback(
        setDebounce((query: string) => {
            dispatch(setSearchQuery(query));
        }, 1000),
        [dispatch]
    );

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setInputValue(query)
        debouncedDispatch(query);
    };

    return (
        <StyledInput
            type="search"
            placeholder="Search products"
            value={inputValue}
            onChange={handleInputChange}
            startAdornment={
                <InputAdornment position="start">
                    <StyledSearchIcon />
                </InputAdornment>
            } />
    )
}

export default Search;