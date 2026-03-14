import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api'; // Updated to port 5001

export const allocateResources = async (resourceData: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/resources/allocate`, resourceData);
        return response.data;
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new Error('Error allocating resources: ' + errorMessage);
    }
};

export const getResourceStatus = async (resourceId: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources/status/${resourceId}`);
        return response.data;
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new Error('Error fetching resource status: ' + errorMessage);
    }
};

export const getMetrics = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/metrics`);
        return response.data;
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new Error('Error fetching metrics: ' + errorMessage);
    }
};

export const getHistoricalData = async (metricId: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/metrics/historical/${metricId}`);
        return response.data;
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new Error('Error fetching historical data: ' + errorMessage);
    }
};

// Alias for fetchMetrics
export const fetchMetrics = getMetrics;