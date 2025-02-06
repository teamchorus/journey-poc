import { http, HttpResponse } from 'msw';

export const handlers = [
    http.post('/api/export/journey/:journeyId', () => {
        return HttpResponse.json({
            operationId: 'mock-export-' + Date.now(),
            status: 'IN_PROGRESS'
        });
    }),

    http.post('/api/import/journey', () => {
        return HttpResponse.json({
            operationId: 'mock-import-' + Date.now(),
            status: 'IN_PROGRESS'
        });
    }),

    http.get('/api/operation/:operationId', ({ params }) => {
        const operationId = params.operationId;
        // Simulate different states based on the operation ID
        if (typeof operationId === 'string' && operationId.includes('error')) {
            return HttpResponse.json({ status: 'FAILED' });
        }
        return HttpResponse.json({ status: 'COMPLETED' });
    })
];