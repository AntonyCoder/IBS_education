import styled from "styled-components";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from "@mui/material";
import { Colors } from "@enums/colors.enums";
import { tabletBreakpoint } from "@constants/styles";

export const ItemPage = styled('div')(
    () => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 24px',

        [`@media (max-width: ${tabletBreakpoint})`]: {
            flexDirection: 'column',
            marginBottom: '2.4rem',
        }
    })
)

export const ImageWrapper = styled('div')(
    () => ({
        marginRight: '1.6rem',

        [`@media (max-width: ${tabletBreakpoint})`]: {
            margin: '0 0 1.6rem',
            display: 'flex',
            justifyContent: 'center',
            width: '100vw',
            background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.15) 50%)',
        }
    })
)

export const ItemImage = styled('img')(
    () => ({
        padding: '4.9rem 7.4rem',
        border: '1px solid',
        borderColor: Colors.cardBackgroundColor,

        [`@media (max-width: ${tabletBreakpoint})`]: {
            padding: 0,
            margin: '1.6rem 0',
            height: '16.8rem',
            border: 'none',
        }
    })
)

export const ItemInformation = styled('div')(
    () => ({
        display: 'flex',
        flexDirection: 'column',
    })
)

export const ItemTitle = styled('h1')(
    () => ({
        fontWeight: 700,
        fontSize: '2.4rem',
        margin: '0 0 16px 0',
    })
)

export const ItemDescription = styled('p')(
    () => ({
        fontSize: '1.4rem',
        marginBottom: '24px',
    })
)

export const ItemDetails = styled('span')(
    () => ({
        fontWeight: 700,
        fontSize: '1.8rem',
        marginBottom: '16px',
    })
)

export const PurchaseWrapper = styled('div')(
    () => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',

        [`@media (max-width: ${tabletBreakpoint})`]: {
            flexWrap: 'wrap',
        }
    })
)

export const ItemPrice = styled('span')(
    () => ({
        fontSize: '3.6rem',
        color: Colors.activeColor,
        marginRight: '16px',

        [`@media (max-width: ${tabletBreakpoint})`]: {
            width: 'calc(100% - 24px)',
            order: -1,
            margin: '0 0 1.6rem 0',
        }
    })
)

export const AddButton = styled(Button)(
    () => ({
        textTransform: 'none',
        padding: 0,
        margin: '0 1.6rem',
        width: '16rem',
        height: '4rem',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: Colors.activeColor,
        color: Colors.white,
        fontSize: '2.4rem',
        transition: 'ease-in-out 0.2s',
        cursor: 'pointer',

        '&:hover': {
            boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.25)',
            background: Colors.activeColorHover,
        },

        [`@media (max-width: ${tabletBreakpoint})`]: {
            order: 3,
            margin: '0 0 0 2.7rem',
        }
    })
)

export const FavoriteIconWrapper = styled('div')(
    () => ({
        cursor: 'pointer',

        [`@media (max-width: ${tabletBreakpoint})`]: {
            order: 1,
            marginBottom: '1.6rem',
        }
    })
)

export const StyledFavoriteIcon = styled(FavoriteIcon)(
    () =>
    ({
        color: Colors.activeColor,
        fontSize: '24px'
    })
)

export const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)(
    () =>
    ({
        color: Colors.iconBorder,
        fontSize: '24px',
    })
)