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
    Alert
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Schedule as ScheduleIcon,
    Group as GroupIcon,
    Settings as SettingsIcon,
    ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import journeyData from '../config/journeys.json';
import { JOURNEY_DETAILS } from '../config/constant';
console.log(journeyData);
interface JourneyContent {
    journey_id: string;
    title: string;
    subtitle: string;
    summary: string;
    thumbnail: string;
    marketing_goal: string;
    industry: string;
    target_persona: string;
    journey_flow: string;
    target_audience: string;
    marketing_channels: string[];
    technical_assets: {
        journey: string[];
        audience: string[];
        schema?: string[];
        message: string[];
    };
}

interface Journey {
    page_metadata: {
        title: string;
        description: string;
    };
    journey_content: JourneyContent;
}

const JourneyDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const journey = journeyData.journeys.find(
        (j: Journey) => j.journey_content.journey_id === id
    );

    if (!journey) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Alert severity="error">{JOURNEY_DETAILS.ERROR.NOT_FOUND}</Alert>
                <Button
                    onClick={() => navigate('/journeys')}
                    sx={{ mt: 2 }}
                >
                    {JOURNEY_DETAILS.ERROR.BACK_BUTTON}
                </Button>
            </Container>
        );
    }

    const { journey_content: journeyDetails } = journey;

    const handleDeploy = () => {
        navigate(`/journeys/${id}/deploy`);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Header Section */}
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                    <Chip
                        label={journeyDetails.marketing_goal}
                        color="primary"
                        size="small"
                        sx={{ mb: 1 }}
                    />
                    <Typography variant="h2" component="h1" gutterBottom>
                        {journeyDetails.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        {journeyDetails.summary}
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={handleDeploy}
                    sx={{                      
                        width: '330px'
                    }}
                >
                    {JOURNEY_DETAILS.BUTTONS.CUSTOMIZE}
                </Button>
            </Box>

            <Grid container spacing={4}>
                {/* Configuration Details */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            {JOURNEY_DETAILS.SECTIONS.DETAILS}
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <ScheduleIcon sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="subtitle1">{JOURNEY_DETAILS.FIELDS.INDUSTRY}</Typography>
                                </Box>
                                <Typography variant="body1">{journeyDetails.industry}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <GroupIcon sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="subtitle1">{JOURNEY_DETAILS.FIELDS.TARGET_PERSONA}</Typography>
                                </Box>
                                <Typography variant="body1">{journeyDetails.target_persona}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <SettingsIcon sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="subtitle1">{JOURNEY_DETAILS.FIELDS.TARGET_AUDIENCE}</Typography>
                                </Box>
                                <Typography variant="body1">{journeyDetails.target_audience}</Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 3 }} />
                        <Typography variant="subtitle1" gutterBottom>
                            {JOURNEY_DETAILS.FIELDS.MARKETING_CHANNELS}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {journeyDetails.marketing_channels.map((channel: string) => (
                                <Chip key={channel} label={channel} variant="outlined" />
                            ))}
                        </Box>
                    </Paper>
                </Grid>

                {/* Preview Image */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            {JOURNEY_DETAILS.SECTIONS.PREVIEW}
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