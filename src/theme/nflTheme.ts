import { createTheme } from '@mui/material/styles';

export const nflTheme = createTheme({
    palette: {
        primary: {
            main: '#013369', // NFL Navy
            light: '#1B4B8A',
            dark: '#012447',
        },
        secondary: {
            main: '#D50A0A', // NFL Red
            light: '#E33939',
            dark: '#A30808',
        },
        grey: {
            500: '#A5ACAF', // NFL Silver
        },
        background: {
            default: '#FFFFFF',
            paper: '#F5F5F5',
        },
    },
    typography: {
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.00833em',
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 600,
            letterSpacing: '0em',
        },
        body1: {
            fontSize: '1rem',
            letterSpacing: '0.00938em',
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    padding: '8px 24px',
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                },
            },
        },
    },
}); 