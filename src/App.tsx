import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { nflTheme } from './theme/nflTheme';

// Import pages
import LandingPage from './pages/LandingPage';
import JourneyListPage from './pages/JourneyListPage';
import JourneyDetailsPage from './pages/JourneyDetailsPage';
import DeploymentFormPage from './pages/DeploymentFormPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
    return (
        <ThemeProvider theme={nflTheme}>
            <CssBaseline />
            <Router>
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <AppBar position="sticky">
                        <Toolbar>
                            <Box
                                component="img"
                                src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg"
                                alt="NFL Logo"
                                sx={{
                                    height: 40,
                                    mr: 2,
                                    filter: 'brightness(0) invert(1)' // Makes the logo white
                                }}
                            />
                            <Typography variant="h6" component="div">
                                Journey Migration Portal
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <Box component="main" sx={{ flexGrow: 1 }}>
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/journeys" element={<JourneyListPage />} />
                            <Route path="/journeys/:id" element={<JourneyDetailsPage />} />
                            <Route path="/journeys/:id/deploy" element={<DeploymentFormPage />} />
                            <Route path="/confirmation" element={<ConfirmationPage />} />
                        </Routes>
                    </Box>

                    <Box
                        component="footer"
                        sx={{
                            py: 3,
                            px: 2,
                            mt: 'auto',
                            backgroundColor: (theme) => theme.palette.grey[100],
                        }}
                    >
                        <Typography variant="body2" color="text.secondary" align="center">
                            © {new Date().getFullYear()} NFL. All rights reserved.
                        </Typography>
                    </Box>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App; 