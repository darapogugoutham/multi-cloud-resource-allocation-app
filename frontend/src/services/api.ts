import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const allocateResources = async (resourceData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/resources/allocate`, resourceData);
        return response.data;
    } catch (error) {
        throw new Error('Error allocating resources: ' + error.message);
    }
};

export const getResourceStatus = async (resourceId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources/status/${resourceId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching resource status: ' + error.message);
    }
};

export const getMetrics = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/metrics`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching metrics: ' + error.message);
    }
};

export const getHistoricalData = async (metricId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/metrics/historical/${metricId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching historical data: ' + error.message);
    }
};