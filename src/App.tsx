import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { nflTheme } from './theme/nflTheme';
import { AppLayout } from './components/Layout/AppLayout';
import { HomePage } from './pages/HomePage';
import { JourneyDetailPage } from './pages/JourneyDetailPage';
import { initMSW } from './mocks/browser';
import './App.css';

const App: React.FC = () => {
    useEffect(() => {
        // Initialize MSW
        initMSW();
    }, []);

    return (
        <ThemeProvider theme={nflTheme}>
            <CssBaseline />
            <BrowserRouter>
                <AppLayout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/journey/:id" element={<JourneyDetailPage />} />
                    </Routes>
                </AppLayout>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App; 