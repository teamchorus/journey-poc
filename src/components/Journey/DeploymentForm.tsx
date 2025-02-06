import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    CircularProgress,
    Alert,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    FormHelperText,
    SelectChangeEvent,
} from '@mui/material';
import { AEPService } from '../../services/aepService';

interface Field {
    id: string;
    label: string;
    type: string;
    required: boolean;
    min?: number;
    max?: number;
    options?: string[];
}

interface DeploymentFormProps {
    journeyId: string;
    fields: Field[];
    onSuccess: () => void;
}

export const DeploymentForm: React.FC<DeploymentFormProps> = ({
    journeyId,
    fields,
    onSuccess,
}) => {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const aepService = AEPService.getInstance();

    const handleTextChange = (field: Field) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field.id]: event.target.value,
        }));
        setTouched((prev) => ({
            ...prev,
            [field.id]: true,
        }));
    };

    const handleSelectChange = (field: Field) => (
        event: SelectChangeEvent<string>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field.id]: event.target.value,
        }));
        setTouched((prev) => ({
            ...prev,
            [field.id]: true,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Export the journey
            const exportId = await aepService.exportJourney(journeyId);

            // Wait for export to complete
            let status = await aepService.checkOperationStatus(exportId);
            while (status === 'IN_PROGRESS') {
                await new Promise(resolve => setTimeout(resolve, 1000));
                status = await aepService.checkOperationStatus(exportId);
            }

            if (status === 'FAILED') {
                throw new Error('Journey export failed');
            }

            // Import the journey with parameters
            const importId = await aepService.importJourney(journeyId, {
                segmentationId: formData.segmentation_id,
                durationDays: parseInt(formData.duration, 10),
            });

            // Wait for import to complete
            status = await aepService.checkOperationStatus(importId);
            while (status === 'IN_PROGRESS') {
                await new Promise(resolve => setTimeout(resolve, 1000));
                status = await aepService.checkOperationStatus(importId);
            }

            if (status === 'FAILED') {
                throw new Error('Journey import failed');
            }

            onSuccess();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Deployment failed');
        } finally {
            setLoading(false);
        }
    };

    const renderField = (field: Field) => {
        if (field.type === 'select' && field.options) {
            return (
                <FormControl
                    key={field.id}
                    fullWidth
                    margin="normal"
                    required={field.required}
                    error={touched[field.id] && !formData[field.id]}
                >
                    <InputLabel id={`${field.id}-label`}>{field.label}</InputLabel>
                    <Select
                        labelId={`${field.id}-label`}
                        value={formData[field.id] || ''}
                        onChange={handleSelectChange(field)}
                        label={field.label}
                    >
                        {field.options.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                    {touched[field.id] && !formData[field.id] && (
                        <FormHelperText>This field is required</FormHelperText>
                    )}
                </FormControl>
            );
        }

        return (
            <TextField
                key={field.id}
                label={field.label}
                type={field.type}
                required={field.required}
                fullWidth
                margin="normal"
                value={formData[field.id] || ''}
                onChange={handleTextChange(field)}
                error={touched[field.id] && !formData[field.id]}
                helperText={
                    touched[field.id] && !formData[field.id]
                        ? 'This field is required'
                        : ''
                }
                inputProps={{
                    min: field.min,
                    max: field.max,
                }}
            />
        );
    };

    return (
        <Paper
            elevation={2}
            sx={{
                p: 4,
                borderRadius: 2,
                background: 'linear-gradient(to bottom, #fff, #f8f9fa)',
            }}
        >
            <form onSubmit={handleSubmit}>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        mb: 3,
                    }}
                >
                    Configure Deployment
                </Typography>

                {error && (
                    <Alert
                        severity="error"
                        sx={{
                            mb: 3,
                            borderRadius: 1,
                        }}
                    >
                        {error}
                    </Alert>
                )}

                {fields.map(renderField)}

                <Box sx={{ mt: 4 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={loading}
                        size="large"
                        sx={{
                            py: 1.5,
                            fontSize: '1.1rem',
                        }}
                    >
                        {loading ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            'Deploy Journey'
                        )}
                    </Button>
                </Box>
            </form>
        </Paper>
    );
}; 