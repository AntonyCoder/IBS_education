import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@mui/material";
import { Colors } from "@enums/colors.enums";
import { mobileBreakpoint } from "@constants/styles";

export const StyledInput = styled(Input)(
    () =>
    ({
        border: 'none',
        borderBottom: '2px solid',
        borderBottomColor: Colors.white,
        width: '30rem',
        height: '4rem',
        fontSize: '1.4rem',

        '&::before': {
            content: 'none',
        },

        '&::after': {
            borderBottom: '2px solid',
            borderBottomColor: Colors.activeColor
        },

        '&:focus': {
            outline: 'none',
            borderBottom: '2px solid',
            borderBottomColor: Colors.activeColor
        },

        '&:focus-within svg': {
            color: Colors.activeColor,
        },

        [`@media (max-width: ${mobileBreakpoint})`]: {
            width: '20rem',
        }
    })
)

export const StyledSearchIcon = styled(SearchIcon)(
    () =>
    ({
        fontSize: '24px',
        color: Colors.primaryColor,
        paddingLeft: '3px',
    })
)

