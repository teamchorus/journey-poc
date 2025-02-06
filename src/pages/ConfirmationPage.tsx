import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Paper,
    Alert,
    AlertTitle,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import {
    CheckCircle as CheckCircleIcon,
    Error as ErrorIcon,
    ArrowForward as ArrowForwardIcon,
    AccessTime as AccessTimeIcon,
    Link as LinkIcon,
    Description as DescriptionIcon,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

interface LocationState {
    success: boolean;
    journeyId: string;
    deploymentId: string;
    error?: string;
}

const ConfirmationPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as LocationState;

    const deploymentDetails = [
        {
            icon: <AccessTimeIcon color="primary" />,
            label: 'Deployment Time',
            value: new Date().toLocaleString(),
        },
        {
            icon: <LinkIcon color="primary" />,
            label: 'Journey ID',
            value: state?.journeyId || 'N/A',
        },
        {
            icon: <DescriptionIcon color="primary" />,
            label: 'Deployment ID',
            value: state?.deploymentId || 'N/A',
        },
    ];

    const handleViewJourneys = () => {
        navigate('/journeys');
    };

    const handleNewDeployment = () => {
        navigate(-1);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Paper sx={{ p: 4, textAlign: 'center', mb: 4 }}>
                {state?.success ? (
                    <Box>
                        <CheckCircleIcon
                            sx={{ fontSize: 64, color: 'success.main', mb: 2 }}
                        />
                        <Typography variant="h2" component="h1" gutterBottom>
                            Deployment Successful
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Your journey has been successfully deployed to the target environment
                        </Typography>
                    </Box>
                ) : (
                    <Box>
                        <ErrorIcon
                            sx={{ fontSize: 64, color: 'error.main', mb: 2 }}
                        />
                        <Typography variant="h2" component="h1" gutterBottom>
                            Deployment Failed
                        </Typography>
                        <Alert severity="error" sx={{ mb: 3 }}>
                            <AlertTitle>Error</AlertTitle>
                            {state?.error || 'An unexpected error occurred during deployment'}
                        </Alert>
                    </Box>
                )}
            </Paper>

            {state?.success && (
                <Paper sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Deployment Details
                    </Typography>
                    <List>
                        {deploymentDetails.map((detail, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    {detail.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={detail.label}
                                    secondary={detail.value}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button
                    variant="outlined"
                    onClick={handleViewJourneys}
                    startIcon={<ArrowForwardIcon />}
                >
                    View All Journeys
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNewDeployment}
                >
                    {state?.success ? 'Deploy Another Journey' : 'Try Again'}
                </Button>
            </Box>
        </Container>
    );
};

export default ConfirmationPage; 