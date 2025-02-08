import React from 'react';
import {
    Grid,
    Typography,
    Box,
    Button,
    Card,
    CardMedia,
    Container,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const handleNavigate = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/journey/listing');
    };

    return (
        <Box>
            {/* Super Bowl Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: { xs: '400px', md: '600px' },
                    mb: 6,
                    overflow: 'hidden',
                }}
            >
                <CardMedia
                    component="img"
                    image="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/y2isqgxwqpv8qhmqkqec"
                    alt="Super Bowl LVIII"
                    sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to right, rgba(1,51,105,0.9) 0%, rgba(1,51,105,0.7) 50%, rgba(1,51,105,0.4) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Container maxWidth="lg" onClick={handleNavigate} sx={{ cursor: 'pointer' }}>
                        <Box maxWidth="600px">
                            <Typography
                                variant="h1"
                                sx={{
                                    color: 'white',
                                    mb: 2,
                                    fontSize: { xs: '2rem', md: '3.5rem' },
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                }}
                            >
                                Gear Up for Super Bowl LVIII
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: 'white',
                                    mb: 4,
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                                }}
                            >
                                Deploy global fan engagement journeys for the biggest game of the year
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                endIcon={<ArrowOutwardIcon />}
                                sx={{
                                    px: 4,
                                    py: 2,
                                    fontSize: '1.1rem',
                                }}
                            >
                                Launch Super Bowl Campaign
                            </Button>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage; 