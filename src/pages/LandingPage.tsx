import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const features = [
        {
            title: 'Journey Templates',
            description: 'Access pre-configured AEP journey templates designed for NFL marketing campaigns',
            image: 'https://picsum.photos/seed/nfl1/800/400',
        },
        {
            title: 'Quick Deployment',
            description: 'Deploy journeys between environments in minutes, not days',
            image: 'https://picsum.photos/seed/nfl2/800/400',
        },
        {
            title: 'Brand Compliance',
            description: '100% compliant with NFL brand guidelines and standards',
            image: 'https://picsum.photos/seed/nfl3/800/400',
        },
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: 8,
                    mb: 6
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h1" component="h1" gutterBottom>
                        Faster Journey Deployment
                    </Typography>
                    <Typography variant="h5" component="h2" sx={{ mb: 4 }}>
                        Streamline your marketing journey deployments with our powerful migration tools
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={() => navigate('/journeys')}
                    >
                        View Journey Templates
                    </Button>
                </Container>
            </Box>

            {/* Features Section */}
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card sx={{ height: '100%' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={feature.image}
                                    alt={feature.title}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h3" gutterBottom>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default LandingPage; 