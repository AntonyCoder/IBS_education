import { InputAdornment } from "@mui/material";
import React, { ChangeEvent } from "react";

import { StyledInput, StyledSearchIcon } from "./search.styled";
import { useAppDispatch, useAppSelector } from "@utils/hooks";
import { setSearchQuery } from "@slices/catalogSlice/catalogSlice";

const Search: React.FC = () => {

    const dispatch = useAppDispatch();
    const searchQuery = useAppSelector((state) => state.catalog.searchQuery);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        dispatch(setSearchQuery(query));
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