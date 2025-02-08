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
    Alert,
    CircularProgress
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getAuthToken, importJourney } from '../services/authService';
import { DEPLOYMENT_FORM, DEPLOYMENT_DEFAULTS } from '../config/constant';

const DeploymentFormPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState({
        segmentationId: '',
        description: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDeploy = async () => {
        setLoading(true);
        try {
            const authResponse = await getAuthToken();
            
            const importData = {
                id: id || '',
                name: formData.description || DEPLOYMENT_DEFAULTS.NAME,
                description: formData.description || DEPLOYMENT_DEFAULTS.DESCRIPTION,
                destinationSandbox: {
                    name: DEPLOYMENT_DEFAULTS.SANDBOX,
                    imsOrgId: process.env.REACT_APP_ORG_ID || ''
                }
            };

            const importResponse = await importJourney(authResponse.access_token, importData);
            console.log(importResponse);
            navigate('/confirmation', {
                state: {
                    success: true,
                    journeyId: id,
                    deploymentId: importResponse.id || 'dep_' + Math.random().toString(36).substr(2, 9)
                }
            });
        } catch (error) {
            console.error('Deployment failed:', error);
            // Add error handling - maybe show an error alert
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                {DEPLOYMENT_FORM.TITLE}
            </Typography>
            <Paper sx={{ p: 3, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label={DEPLOYMENT_FORM.SEGMENTATION.LABEL}
                            name="segmentationId"
                            value={formData.segmentationId}
                            onChange={handleInputChange}
                            helperText={DEPLOYMENT_FORM.SEGMENTATION.HELPER_TEXT}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label={DEPLOYMENT_FORM.DESCRIPTION.LABEL}
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            helperText={DEPLOYMENT_FORM.DESCRIPTION.HELPER_TEXT}
                        />
                    </Grid>
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleDeploy}
                        disabled={loading}
                        startIcon={loading && <CircularProgress size={20} />}
                    >
                        {loading ? DEPLOYMENT_FORM.BUTTONS.DEPLOYING : DEPLOYMENT_FORM.BUTTONS.DEPLOY}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default DeploymentFormPage; 