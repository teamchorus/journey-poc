import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import PublicIcon from '@mui/icons-material/Public';

interface JourneyCardProps {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
}

export const JourneyCard: React.FC<JourneyCardProps> = ({
    id,
    title,
    description,
    thumbnail,
}) => {
    const navigate = useNavigate();

    const handleDeploy = () => {
        navigate(`/journey/${id}`);
    };

    const isInternational = id.includes('international') ||
        id.includes('global') ||
        id.includes('london') ||
        id.includes('germany');

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'visible',
            }}
        >
            {isInternational && (
                <Chip
                    icon={<PublicIcon />}
                    label="International"
                    color="secondary"
                    sx={{
                        position: 'absolute',
                        top: -12,
                        right: 16,
                        zIndex: 1,
                        px: 1,
                    }}
                />
            )}
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={thumbnail}
                    alt={title}
                    sx={{
                        objectFit: 'cover',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                    }}
                />
            </Box>
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        lineHeight: 1.3,
                        mb: 2,
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        mb: 3,
                        minHeight: '3em',
                    }}
                >
                    {description}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleDeploy}
                    endIcon={<ArrowOutwardIcon />}
                    sx={{
                        mt: 'auto',
                    }}
                >
                    Configure Journey
                </Button>
            </CardContent>
        </Card>
    );
}; 