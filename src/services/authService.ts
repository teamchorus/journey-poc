import axios from 'axios';
import { AuthResponse } from '../types/auth';
import { ImportRequest } from '../types/import';

const AUTH_URL = process.env.REACT_APP_AUTH_URL || '';
const IMPORT_URL = process.env.REACT_APP_IMPORT_URL || '';

export const getAuthToken = async (): Promise<AuthResponse> => {
    const params = new URLSearchParams({
        client_id: process.env.REACT_APP_API_KEY!,
        client_secret: process.env.REACT_APP_CLIENT_SECRET!,
        grant_type: 'client_credentials',
        scope: 'openid,AdobeID,read_organizations,additional_info.projectedProductContext,session'
    });

    const response = await axios.post<AuthResponse>(AUTH_URL, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    return response.data;
};

export const importJourney = async (accessToken: string, importData: ImportRequest) => {
    const response = await axios.post(IMPORT_URL, importData, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'x-api-key': process.env.REACT_APP_API_KEY!,
            'x-gw-ims-org-id': process.env.REACT_APP_ORG_ID!,
            'x-sandbox-name': 'prod',
            'Content-Type': 'application/json',
            'User-Agent': '-c'
        }
    });

    return response.data;
}; 