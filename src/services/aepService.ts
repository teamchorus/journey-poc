import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_AEP_API_URL || '/api';

interface DeploymentParams {
    segmentationId: string;
    durationDays: number;
}

export class AEPService {
    private static instance: AEPService;
    private clientId: string;

    private constructor() {
        this.clientId = process.env.REACT_APP_AEP_CLIENT_ID || '';
    }

    public static getInstance(): AEPService {
        if (!AEPService.instance) {
            AEPService.instance = new AEPService();
        }
        return AEPService.instance;
    }

    async exportJourney(journeyId: string): Promise<string> {
        try {
            const response = await axios.post(`${API_BASE_URL}/export/journey/${journeyId}`, {
                clientId: this.clientId
            });
            return response.data.operationId;
        } catch (error) {
            console.error('Export journey failed:', error);
            throw new Error('Failed to export journey');
        }
    }

    async importJourney(journeyId: string, params: DeploymentParams): Promise<string> {
        try {
            const response = await axios.post(`${API_BASE_URL}/import/journey`, {
                journeyId,
                params,
                clientId: this.clientId
            });
            return response.data.operationId;
        } catch (error) {
            console.error('Import journey failed:', error);
            throw new Error('Failed to import journey');
        }
    }

    async checkOperationStatus(operationId: string): Promise<'COMPLETED' | 'FAILED' | 'IN_PROGRESS'> {
        try {
            const response = await axios.get(`${API_BASE_URL}/operation/${operationId}`);
            return response.data.status;
        } catch (error) {
            console.error('Check status failed:', error);
            throw new Error('Failed to check operation status');
        }
    }
} 