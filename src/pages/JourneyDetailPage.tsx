import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Paper,
    Alert,
    Grid,
    Chip
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import journeyData from '../config/journeys.json';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Journey {
    journey_id: string;
    name: string;
    description: string;
    thumbnail: string;
}

const JourneyDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const journey = journeyData.journeys.find((j: Journey) => j.journey_id === id);

    if (!journey) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Alert severity="error">Journey template not found</Alert>
                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate('/journeys')}
                    sx={{ mt: 2 }}
                >
                    Back to Templates
                </Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ mb: 4 }}>
                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate('/journeys')}
                    sx={{ mb: 2 }}
                >
                    Back to Templates
                </Button>
                <Typography variant="h2" component="h1" gutterBottom>
                    {journey.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    {journey.description}
                </Typography>
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Journey Preview
                        </Typography>
                        <Box
                            component="img"
                            src={journey.thumbnail}
                            alt={journey.name}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 1,
                                mb: 2
                            }}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Actions
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => navigate(`/journeys/${id}/deploy`)}
                            sx={{ mb: 2 }}
                        >
                            Deploy Journey
                        </Button>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={() => navigate(`/journeys/${id}/edit`)}
                        >
                            Edit Template
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default JourneyDetailPage; 