import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Paper,
    TextField,
    MenuItem,
    Grid,
    Stepper,
    Step,
    StepLabel,
    Alert,
    CircularProgress
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const environments = [
    { value: 'dev', label: 'Development' },
    { value: 'stage', label: 'Staging' },
    { value: 'prod', label: 'Production' }
];

const DeploymentFormPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState({
        sourceEnv: 'dev',
        targetEnv: 'stage',
        segmentationId: '',
        durationDays: '30',
        description: ''
    });

    const steps = ['Environment Selection', 'Configuration', 'Review & Deploy'];

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleDeploy = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        navigate('/confirmation', {
            state: {
                success: true,
                journeyId: id,
                deploymentId: 'dep_' + Math.random().toString(36).substr(2, 9)
            }
        });
    };

    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                select
                                label="Source Environment"
                                name="sourceEnv"
                                value={formData.sourceEnv}
                                onChange={handleInputChange}
                                helperText="Select the environment to copy from"
                            >
                                {environments.map((env) => (
                                    <MenuItem key={env.value} value={env.value}>
                                        {env.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                select
                                label="Target Environment"
                                name="targetEnv"
                                value={formData.targetEnv}
                                onChange={handleInputChange}
                                helperText="Select the environment to deploy to"
                            >
                                {environments.map((env) => (
                                    <MenuItem key={env.value} value={env.value}>
                                        {env.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                );
            case 1:
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Segmentation ID"
                                name="segmentationId"
                                value={formData.segmentationId}
                                onChange={handleInputChange}
                                helperText="Enter the AEP segmentation ID"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Duration (Days)"
                                name="durationDays"
                                type="number"
                                value={formData.durationDays}
                                onChange={handleInputChange}
                                helperText="Enter the journey duration in days"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                label="Deployment Description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                helperText="Add any notes or description for this deployment"
                            />
                        </Grid>
                    </Grid>
                );
            case 2:
                return (
                    <Box>
                        <Alert severity="info" sx={{ mb: 3 }}>
                            Please review your deployment configuration before proceeding
                        </Alert>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Source Environment
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {environments.find(env => env.value === formData.sourceEnv)?.label}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Target Environment
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {environments.find(env => env.value === formData.targetEnv)?.label}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Segmentation ID
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {formData.segmentationId}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Duration
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {formData.durationDays} days
                                </Typography>
                            </Grid>
                            {formData.description && (
                                <Grid item xs={12}>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        Description
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {formData.description}
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                );
            default:
                return null;
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Deploy Journey
            </Typography>
            <Paper sx={{ p: 3, mb: 4 }}>
                <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {renderStepContent(activeStep)}

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, gap: 2 }}>
                    {activeStep !== 0 && (
                        <Button onClick={handleBack}>
                            Back
                        </Button>
                    )}
                    {activeStep === steps.length - 1 ? (
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleDeploy}
                            disabled={loading}
                            startIcon={loading && <CircularProgress size={20} />}
                        >
                            {loading ? 'Deploying...' : 'Deploy Journey'}
                        </Button>
                    ) : (
                        <Button variant="contained" onClick={handleNext}>
                            Next
                        </Button>
                    )}
                </Box>
            </Paper>
        </Container>
    );
};

export default DeploymentFormPage; 