import { createTheme } from '@mui/material';
import { colors } from './varibles';

const breakpoints = {
    values: {
        xs: 0,
        sm: 480,
        md: 870,
        lg: 1024,
        xl: 1440,
    },
};

const theme = createTheme({
    breakpoints,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '0',
                    textTransform: 'none',
                    margin: '0 1.6rem',
                    width: '16rem',
                    height: '4rem',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '2.4rem',
                    transition: 'ease-in-out 0.2s',
                    cursor: 'pointer',
                    backgroundColor: colors.activeColor,
                    color: colors.white,
                    '&:hover': {
                        boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.25)',
                        background: colors.activeColorHover,
                    },
                    [`@media (max-width:${breakpoints.values.md}px)`]: {
                        order: '3',
                        margin: '0 0 0 2.7rem',
                    },
                },
            },
        },
    }
})

export default theme;