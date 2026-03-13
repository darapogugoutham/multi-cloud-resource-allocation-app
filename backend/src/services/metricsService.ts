import axios from 'axios';
import { MetricData } from '../types';

const API_URL = process.env.API_URL || 'http://localhost:5000/api/metrics';

export const fetchMetrics = async (): Promise<MetricData[]> => {
    try {
        const response = await axios.get(`${API_URL}/current`);
        return response.data;
    } catch (error) {
        console.error('Error fetching metrics:', error);
        throw error;
    }
};

export const processMetrics = (data: MetricData[]): any => {
    // Process the metrics data as needed for visualization
    return data.map(metric => ({
        name: metric.name,
        value: metric.value,
        timestamp: metric.timestamp,
    }));
};