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
    "journey_id": "e313132-dqddss-mdddssdsa-0438028394",
        "title": "Abandoned Browsing: Merchandise",
        "subtitle": "Nudge fans to re-engage after they leave your website or app after browsing a product.",
        "summary": "Use this playbook to re-engage with a fan, when they browsed a specific sports merchandise on either the brand's website or mobile app, but did not go ahead with the subsequent steps to complete the purchase.",
        "thumbnail": "https://exc-unifiedcontent.experience.adobe.net/solutions/exc-dx-usecase-importer/static-assets/templates/marketing-templates//AbandonedBrowsingMerchandise/images/AbandonedBrowsingMerchandise-01.png",
        "marketing_goal": "Sell Products & Services",
        "industry": "Sports & Live Entertainment",
        "target_persona": "Fan",
        "journey_flow": "https://fastly.picsum.photos/id/1022/600/300.jpg?hmac=LnCMMCfNXcF90JW5W0ZEgj9mjX45GfJpJsPj_1zYexo",
        "target_audience": "Fans who browsed a specific product and ended their session without adding to cart.",
        "marketing_channels": [
            "Email",
            "SMS",
            "Push"
        ],
        "technical_assets": {
            "journey": [
                "Abandoned Browsing: Merchandise"
            ],
            "audience": [
                "Fan Engagement Abandoned Browsing"
            ],
            "schema": [
                "Customer Profile",
                "AEP Event Schema"
            ],
            "channel": [
                "Email",
                "SMS",
                "Email"
            ]
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
                    Customize Journey
                </Button>
            </Box>

            <Grid container spacing={4}>
                {/* Journey Flow */}
                {/* {<Grid item xs={12}>
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
                </Grid>} */}

                {/* Configuration Details */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Journey Details
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <ScheduleIcon sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="subtitle1">Industry</Typography>
                                </Box>
                                <Typography variant="body1">{journeyDetails.industry}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <GroupIcon sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="subtitle1">Target Persona</Typography>
                                </Box>
                                <Typography variant="body1">{journeyDetails.target_persona}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <SettingsIcon sx={{ mr: 1, color: 'primary.main' }} />
                                    <Typography variant="subtitle1">Target Audience</Typography>
                                </Box>
                                <Typography variant="body1">{journeyDetails.target_audience}</Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 3 }} />
                        <Typography variant="subtitle1" gutterBottom>
                            Marketing Channels
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