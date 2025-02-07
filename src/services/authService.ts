import axios from 'axios';
import { AuthResponse } from '../types/auth';
import { ImportRequest } from '../types/import';

const AUTH_URL = 'https://ims-na1.adobelogin.com/ims/token/v3';
const IMPORT_URL = 'https://platform.adobe.io/data/foundation/exim/packages/import/';

const API_KEY = '';
const ORG_ID = '';

export const getAuthToken = async (): Promise<AuthResponse> => {
    const params = new URLSearchParams({
        client_id: API_KEY,
        client_secret: 'p8e-08BYfXd1STcUle_RsVsJmeUXDheL-oJ6',
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
            'x-api-key': API_KEY,
            'x-gw-ims-org-id': ORG_ID,
            'x-sandbox-name': 'prod',
            'Content-Type': 'application/json',
            'User-Agent': '-c'
        }
    });

    return response.data;
}; 