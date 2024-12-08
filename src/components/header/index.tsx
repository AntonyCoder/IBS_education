import React from "react";
import Search from "@header/search";
import {
    StyledHeader,
    SearchWrapper,
    IconButton,
    IconWrapper,
    StyledAccountCircleOutlinedIcon,
    StyledShoppingCartOutlinedIcon
} from "./header.styled";

const Header: React.FC = () => {

    return (
        <StyledHeader>
            <SearchWrapper>
                <Search />
            </SearchWrapper>
            <IconWrapper>
                <IconButton>
                    <StyledShoppingCartOutlinedIcon />
                </IconButton>
                <IconButton>
                    <StyledAccountCircleOutlinedIcon />
                </IconButton>
            </IconWrapper>
        </StyledHeader>
    );
};

export default Header;