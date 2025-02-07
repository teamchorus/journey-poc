export interface ImportRequest {
    id: string;
    name: string;
    description: string;
    destinationSandbox: {
        name: string;
        imsOrgId: string;
    }
} 