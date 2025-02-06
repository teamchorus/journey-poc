import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

// Initialize MSW
export const initMSW = async () => {
    // Only initialize MSW in development
    if (process.env.NODE_ENV === 'development') {
        // Start the worker
        await worker.start({
            onUnhandledRequest: 'bypass', // Don't warn about unhandled requests
        });

        console.log('[MSW] Mock Service Worker started');
    }
}; 