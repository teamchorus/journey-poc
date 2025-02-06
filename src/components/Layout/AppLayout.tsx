import React from 'react';
import {
    AppBar,
    Box,
    Container,
    Toolbar,
    Typography,
    useTheme,
    useMediaQuery,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [language, setLanguage] = React.useState('en');

    const handleLanguageChange = (event: { target: { value: string } }) => {
        setLanguage(event.target.value);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    borderBottom: '1px solid',
                    borderColor: 'rgba(255,255,255,0.1)',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                                component="img"
                                src="/nfl-logo.svg"
                                alt="NFL International"
                                sx={{
                                    height: 40,
                                    mr: 2,
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                                }}
                            />
                            {!isMobile && (
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        background: 'linear-gradient(45deg, #FFFFFF 30%, #E0E0E0 90%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontWeight: 700,
                                    }}
                                >
                                    Journey Migration Portal
                                </Typography>
                            )}
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <LanguageIcon sx={{ color: 'white' }} />
                            <FormControl
                                size="small"
                                sx={{
                                    minWidth: 120,
                                    '& .MuiOutlinedInput-root': {
                                        color: 'white',
                                        '& fieldset': {
                                            borderColor: 'rgba(255,255,255,0.3)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(255,255,255,0.5)',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                    },
                                    '& .MuiSelect-icon': {
                                        color: 'white',
                                    },
                                }}
                            >
                                <InputLabel
                                    id="language-select-label"
                                    sx={{ color: 'white' }}
                                >
                                    Language
                                </InputLabel>
                                <Select
                                    labelId="language-select-label"
                                    value={language}
                                    label="Language"
                                    onChange={handleLanguageChange}
                                >
                                    <MenuItem value="en">English</MenuItem>
                                    <MenuItem value="de">Deutsch</MenuItem>
                                    <MenuItem value="es">Español</MenuItem>
                                    <MenuItem value="pt">Português</MenuItem>
                                    <MenuItem value="zh">中文</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Container
                component="main"
                sx={{
                    flex: 1,
                    py: 4,
                    px: { xs: 2, sm: 3, md: 4 },
                }}
            >
                {children}
            </Container>

            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: theme.palette.grey[100],
                    borderTop: '1px solid',
                    borderColor: theme.palette.grey[200],
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 2,
                        }}
                    >
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            align={isMobile ? 'center' : 'left'}
                        >
                            © {new Date().getFullYear()} NFL International. All rights reserved.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                                color: 'text.secondary',
                                fontSize: '0.875rem',
                            }}
                        >
                            <Box component="a" href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>
                                Privacy Policy
                            </Box>
                            <Box component="a" href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>
                                Terms of Use
                            </Box>
                            <Box component="a" href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>
                                Contact
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}; 