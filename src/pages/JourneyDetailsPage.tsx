import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Divider,
    Chip,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Schedule as ScheduleIcon,
    Group as GroupIcon,
    Settings as SettingsIcon,
    ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';

// Mock data - replace with API call
const journeyDetails = {
    id: 'nfl-bday-2024',
    title: 'Fan Birthday Journey',
    description: 'Automated birthday celebration campaign for NFL fans',
    thumbnail: 'https://picsum.photos/seed/nfl4/800/400',
    category: 'Fan Engagement',
    status: 'Active',
    steps: [
        'Initial Birthday Trigger',
        'Personalization Logic',
        'Content Delivery',
        'Follow-up Engagement'
    ],
    configuration: {
        duration: '30 days',
        audience: 'NFL Fan Database',
        triggers: 'Birthday Date Field',
        channels: ['Email', 'Push', 'SMS']
    }
};

const JourneyDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const handleDeploy = () => {
        navigate(`/journeys/${id}/deploy`);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Header Section */}
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                    <Chip
                        label={journeyDetails.category}
                        color="primary"
                        size="small"
                        sx={{ mb: 1 }}
                    />
                    <Typography variant="h2" component="h1" gutterBottom>
                        {journeyDetails.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        {journeyDetails.description}
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={handleDeploy}
                >
                    Deploy Journey
                </Button>
            </Box>

            <Grid container spacing={4}>
                {/* Journey Flow */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Journey Flow
                        </Typography>
                        <Stepper activeStep={-1} alternativeLabel>
                            {journeyDetails.steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Paper>
                </Grid>

                {/* Configuration Details */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Configuration Details
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <ScheduleIcon sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="subtitle1">Duration</Typography>
                                </Box>
                                <Typography variant="body1">{journeyDetails.configuration.duration}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <GroupIcon sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="subtitle1">Audience</Typography>
                                </Box>
                                <Typography variant="body1">{journeyDetails.configuration.audience}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <SettingsIcon sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="subtitle1">Triggers</Typography>
                                </Box>
                                <Typography variant="body1">{journeyDetails.configuration.triggers}</Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 3 }} />
                        <Typography variant="subtitle1" gutterBottom>
                            Communication Channels
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {journeyDetails.configuration.channels.map((channel) => (
                                <Chip key={channel} label={channel} variant="outlined" />
                            ))}
                        </Box>
                    </Paper>
                </Grid>

                {/* Preview Image */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Journey Preview
                        </Typography>
                        <Box
                            component="img"
                            src={journeyDetails.thumbnail}
                            alt={journeyDetails.title}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 1,
                            }}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default JourneyDetailsPage; 