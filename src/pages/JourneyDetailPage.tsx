import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    Button,
    Card,
    CardMedia,
    Grid,
    IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DeploymentForm } from '../components/Journey/DeploymentForm';
import journeyTemplates from '../config/journeys.json';

export const JourneyDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const template = journeyTemplates.templates.find(t => t.id === id);

    if (!template) {
        return (
            <Box>
                <Typography variant="h5">Journey not found</Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate('/')}
                    sx={{ mt: 2 }}
                >
                    Return Home
                </Button>
            </Box>
        );
    }

    const handleSuccess = () => {
        // Show success message and redirect
        navigate('/', { state: { success: true, message: 'Journey deployed successfully!' } });
    };

    return (
        <Box>
            <IconButton
                onClick={() => navigate('/')}
                sx={{ mb: 2 }}
                aria-label="back"
            >
                <ArrowBackIcon />
            </IconButton>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="300"
                            image={template.thumbnail}
                            alt={template.title}
                            sx={{ objectFit: 'cover' }}
                        />
                    </Card>

                    <Box sx={{ mt: 3 }}>
                        <Typography variant="h4" gutterBottom>
                            {template.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            {template.description}
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <DeploymentForm
                        journeyId={template.id}
                        fields={template.fields}
                        onSuccess={handleSuccess}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}; 