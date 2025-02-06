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
import { JourneyCard } from '../components/Journey/JourneyCard';
import journeyTemplates from '../config/journeys.json';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const HomePage: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
                    <Container maxWidth="lg">
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

            {/* International Series Section */}
            <Container maxWidth="lg" sx={{ mb: 8 }}>
                <Typography
                    variant="h2"
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                        mb: 4,
                        fontSize: { xs: '1.75rem', md: '2.25rem' },
                    }}
                >
                    International Series Journeys
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    align="center"
                    paragraph
                    sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
                >
                    Deploy targeted fan engagement campaigns for NFL's global events and initiatives.
                    Customize your journey based on market, venue, and content preferences.
                </Typography>

                <Grid container spacing={4}>
                    {journeyTemplates.templates.map((template) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={template.id}
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <JourneyCard
                                id={template.id}
                                title={template.title}
                                description={template.description}
                                thumbnail={template.thumbnail}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Game Pass Promotion */}
            <Box
                sx={{
                    bgcolor: 'grey.100',
                    py: 6,
                    borderTop: '3px solid',
                    borderColor: 'primary.main',
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h3"
                                gutterBottom
                                sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
                            >
                                NFL Game Pass International
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Enhance your subscribers' experience with personalized content journeys.
                                From live games to exclusive NFL Network content, deliver the right
                                message at the right time.
                            </Typography>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                endIcon={<ArrowOutwardIcon />}
                            >
                                Explore Game Pass Journeys
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card elevation={0} sx={{ bgcolor: 'transparent' }}>
                                <CardMedia
                                    component="img"
                                    image="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/nfl-game-pass-hero"
                                    alt="NFL Game Pass"
                                    sx={{
                                        height: '300px',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}; 