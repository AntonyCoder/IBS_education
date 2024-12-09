import styled from "styled-components";
import { IconButton, TextField } from "@mui/material";
import { Colors } from "@enums/colors.enums";
import { tabletBreakpoint } from "@constants/styles";

export const QuantityWrapper = styled('div')(
    () => ({
        display: 'flex',

        '& .MuiSvgIcon-root': {
            width: '24px',
            height: '24px',
            color: Colors.activeColor,
        },

        [`@media (max-width: ${tabletBreakpoint})`]: {
            order: 2,
        }
    })
)

export const StyledIconButton = styled(IconButton)(
    () => ({
        border: '1px solid',
        borderColor: Colors.primaryColor,
        width: '4rem',
        height: '4rem',
        backgroundColor: Colors.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
    })
)

export const StyledTextField = styled(TextField)(
    () => ({
        border: 'none',
        boxSizing: 'border-box',
        padding: 0,
        width: '10rem',
        height: '4rem',
        borderTop: '1px solid',
        borderTopColor: Colors.primaryColor,
        borderBottom: '1px solid',
        borderBottomColor: Colors.primaryColor,
        textAlign: 'center',
        fontSize: '2.4rem',
        borderRadius: 0,

        '& .MuiOutlinedInput-root': {
            border: '0px',
            borderRadius: 0,
            height: '4rem',
            padding: 0,
            '& fieldset': {
                border: 'none',
            }
        },

        '& .MuiInputBase-input': {
            padding: 0,
            fontSize: '2.4rem',
            textAlign: 'center',
        },

        [`@media (max-width: ${tabletBreakpoint})`]: {
            width: '6rem',
        }
    })
)