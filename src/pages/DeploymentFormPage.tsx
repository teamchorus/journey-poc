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

const environments = [
    { value: 'dev', label: 'Development' },
    { value: 'stage', label: 'Staging' },
    { value: 'prod', label: 'Production' }
];

const DeploymentFormPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState({
        sourceEnv: 'dev',
        targetEnv: 'stage',
        segmentationId: '',
        durationDays: '30',
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
                id: "230dfab9ebba4479bb9e7ced69366082",
                name: formData.description || "NewDeployment",
                description: formData.description || "Journey Deployment",
                destinationSandbox: {
                    name: "prod",
                    imsOrgId: ""
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
                Deploy Journey
            </Typography>
            <Paper sx={{ p: 3, mb: 4 }}>
                <Grid container spacing={3}>
                    
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Segmentation ID"
                            name="segmentationId"
                            value={formData.segmentationId}
                            onChange={handleInputChange}
                            helperText="Enter the AEP segmentation ID"
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

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleDeploy}
                        disabled={loading}
                        startIcon={loading && <CircularProgress size={20} />}
                    >
                        {loading ? 'Deploying...' : 'Deploy Journey'}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default DeploymentFormPage; 