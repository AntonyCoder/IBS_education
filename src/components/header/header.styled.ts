import styled from "styled-components";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Colors } from "@enums/colors.enums";
import { mobileBreakpoint } from "@constants/styles";

export const StyledHeader = styled('header')(
    () => ({
        margin: '1.6rem 2.4rem 2.4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        [`@media (max-width: ${mobileBreakpoint})`]: {
            margin: '1.6rem 2.4rem',
        }
    })
)

export const SearchWrapper = styled('div')(
    () => ({
        display: 'flex',
        alignItems: 'center',
    })
)

export const IconWrapper = styled('div')(
    () => ({
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    })
)

export const IconButton = styled('a')(
    () => ({
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    })
)

export const StyledShoppingCartOutlinedIcon = styled(ShoppingCartOutlinedIcon)(
    () => ({
        color: Colors.primaryColor,
        fontSize: "24px",
    })
)

export const StyledAccountCircleOutlinedIcon = styled(AccountCircleOutlinedIcon)(
    () => ({
        color: Colors.primaryColor,
        fontSize: "24px",
    })
)