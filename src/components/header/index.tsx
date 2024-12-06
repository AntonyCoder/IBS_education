import React from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Colors } from "@enums/colors.enums";
import Search from "@header/search";
import './header.styles.scss';

const Header: React.FC = () => {
    
    return (
        <header className="header">
            <div className="header__search-wrapper">
                <Search />
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