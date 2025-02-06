import { createTheme } from '@mui/material/styles';

export const nflTheme = createTheme({
    palette: {
        primary: {
            main: '#013369', // NFL Shield Navy
            light: '#1B4B8A', // International accent
            dark: '#012447', // Deep Navy
        },
        secondary: {
            main: '#D50A0A', // NFL Red
            light: '#E41E26', // International Red
            dark: '#B30000', // Deep Red
        },
        background: {
            default: '#FFFFFF',
            paper: '#F8F9FA',
        },
        grey: {
            500: '#A5ACAF', // NFL Silver
            100: '#F8F9FA', // Light background
            900: '#1A1A1A', // Dark text
        },
        success: {
            main: '#00843D', // NFL Green
        },
        error: {
            main: '#D50A0A', // NFL Red
        },
    },
    typography: {
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
        h1: {
            fontSize: '2.75rem',
            fontWeight: 800,
            color: '#013369',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
        },
        h2: {
            fontSize: '2.25rem',
            fontWeight: 700,
            color: '#013369',
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#013369',
            textTransform: 'uppercase',
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#013369',
        },
        body1: {
            fontSize: '1rem',
            color: '#1A1A1A',
            lineHeight: 1.6,
        },
        button: {
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: '0.05em',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    padding: '12px 28px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    },
                },
                contained: {
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    '&:hover': {
                        boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                    },
                },
                containedPrimary: {
                    background: 'linear-gradient(45deg, #013369 30%, #1B4B8A 90%)',
                    border: '2px solid #013369',
                },
                containedSecondary: {
                    background: 'linear-gradient(45deg, #D50A0A 30%, #E41E26 90%)',
                    border: '2px solid #D50A0A',
                },
                outlined: {
                    borderWidth: '2px',
                    '&:hover': {
                        borderWidth: '2px',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    border: '1px solid rgba(0,0,0,0.1)',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.12)',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(90deg, #013369 0%, #1B4B8A 100%)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    borderBottom: '3px solid #D50A0A',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 0,
                        '& fieldset': {
                            borderWidth: '2px',
                        },
                        '&:hover fieldset': {
                            borderWidth: '2px',
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: '2px',
                        },
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                },
            },
        },
    },
}); 