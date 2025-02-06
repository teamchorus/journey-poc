import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Chip,
    IconButton,
    InputAdornment,
    TextField
} from '@mui/material';
import { Search as SearchIcon, FilterList as FilterIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Mock data - replace with actual API call
const journeyTemplates = [
    {
        id: 'nfl-bday-2024',
        title: 'Fan Birthday Journey',
        description: 'Automated birthday celebration campaign for NFL fans',
        thumbnail: 'https://picsum.photos/seed/nfl4/800/400',
        category: 'Fan Engagement',
        status: 'Active'
    },
    {
        id: 'gameday-reminder',
        title: 'Gameday Reminder',
        description: 'Pre-game notifications and content delivery',
        thumbnail: 'https://picsum.photos/seed/nfl5/800/400',
        category: 'Game Operations',
        status: 'Active'
    },
    {
        id: 'super-bowl-campaign',
        title: 'Super Bowl Campaign',
        description: 'Exclusive Super Bowl content and promotions',
        thumbnail: 'https://picsum.photos/seed/nfl6/800/400',
        category: 'Events',
        status: 'Active'
    }
];

const JourneyListPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleJourneyClick = (journeyId: string) => {
        navigate(`/journeys/${journeyId}`);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Header Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Journey Templates
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    Browse and select from our pre-configured journey templates
                </Typography>
            </Box>

            {/* Search and Filter Section */}
            <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search templates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <IconButton
                    sx={{
                        border: 1,
                        borderColor: 'grey.300',
                        borderRadius: 1
                    }}
                >
                    <FilterIcon />
                </IconButton>
            </Box>

            {/* Templates Grid */}
            <Grid container spacing={3}>
                {journeyTemplates.map((template) => (
                    <Grid item xs={12} sm={6} md={4} key={template.id}>
                        <Card>
                            <CardActionArea onClick={() => handleJourneyClick(template.id)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={template.thumbnail}
                                    alt={template.title}
                                />
                                <CardContent>
                                    <Box sx={{ mb: 2 }}>
                                        <Chip
                                            label={template.category}
                                            size="small"
                                            color="primary"
                                            sx={{ mb: 1 }}
                                        />
                                        <Typography variant="h6" component="h3" gutterBottom>
                                            {template.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {template.description}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Chip
                                            label={template.status}
                                            size="small"
                                            color={template.status === 'Active' ? 'success' : 'default'}
                                        />
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default JourneyListPage; 