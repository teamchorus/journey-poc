import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Chip,
    IconButton,
    InputAdornment,
    TextField
} from '@mui/material';
import { Search as SearchIcon, FilterList as FilterIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import journeyData from '../config/Journey_List.json';

interface Journey {
    journey_id: string;
    name: string;
    description: string;
    thumbnail: string;
}

const JourneyListPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleJourneyClick = (journeyId: string) => {
        navigate(`/journeys/${journeyId}`);
    };

    const filteredJourneys = journeyData.journeys.filter((journey: Journey) =>
        journey.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        journey.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Header Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Journey Templates
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    Browse and select from our pre-configured journey templates
                </Typography>
            </Box>

            {/* Templates Grid */}
            <Grid container spacing={3}>
                {filteredJourneys.map((journey: Journey) => (
                    <Grid item xs={12} sm={6} md={4} key={journey.journey_id}>
                        <Card 
                            sx={{ 
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                '&:hover': {
                                    boxShadow: 6
                                }
                            }}
                        >
                            <CardActionArea 
                                onClick={() => handleJourneyClick(journey.journey_id)}
                                sx={{ flexGrow: 1 }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={journey.thumbnail}
                                    alt={journey.name}
                                />
                                <CardContent>
                                    <Typography 
                                        variant="h6" 
                                        component="h3" 
                                        gutterBottom
                                        sx={{
                                            display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                        }}
                                    >
                                        {journey.name}
                                    </Typography>
                                    <Typography 
                                        variant="body2" 
                                        color="text.secondary"
                                        sx={{
                                            display: '-webkit-box',
                                            overflow: 'hidden',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 3,
                                        }}
                                    >
                                        {journey.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default JourneyListPage; 