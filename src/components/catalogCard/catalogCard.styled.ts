import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "@enums/colors.enums";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { mobileBreakpoint } from "@constants/styles";

export const ItemWrapper = styled('div')(
    () =>
    ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '0 0 22rem',
        margin: '0 8px 16px',
        height: '27.2rem',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            boxShadow: '2px 2px 5px 0 rgba(0, 0, 0, 0.15)',
            background: Colors.cardBackgroundColor,
            borderRadius: '10px',
        },

        [`@media (max-width: ${mobileBreakpoint})`]: {
            flex: '0 0 15.5rem',
            margin: '0 8.5px 16px',
        }
    })
);

export const ItemLink = styled(Link)(
    () =>
    ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        textDecoration: 'none',
    })
);

export const FavoriteIconWrapper = styled('div')(
    () =>
    ({
        margin: '8px 8px 8px auto',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.primaryColor,
        cursor: 'pointer',
    })
);

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

export const ItemImage = styled('img')(
    () =>
    ({
        width: '59px',
        height: '79px',
        margin: '31px 0 30px',
    })
);

export const ItemTitle = styled('span')(
    () =>
    ({
        textAlign: 'center',
        lineHeight: '2.5rem',
        margin: '8px 0',
        fontSize: '1.6rem',
        color: Colors.primaryColor,

        [`@media (max-width: ${mobileBreakpoint})`]: {
            fontSize: '1.3rem',
        }
    })
);

export const ItemPrice = styled('span')(
    () =>
    ({
        lineHeight: '2rem',
        fontSize: '1.4rem',
        color: Colors.secondaryColor,
    })
);