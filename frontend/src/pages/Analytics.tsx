import React, { useEffect, useState } from 'react';
import { fetchMetrics } from '../services/api';
import PerformanceMetrics from '../components/PerformanceMetrics';

const Analytics: React.FC = () => {
    const [metricsData, setMetricsData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMetrics = async () => {
            try {
                const data = await fetchMetrics();
                setMetricsData(data);
            } catch (error) {
                console.error("Error fetching metrics:", error);
            } finally {
                setLoading(false);
            }
        };

        getMetrics();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Analytics</h1>
            {metricsData ? (
                <PerformanceMetrics data={metricsData} />
            ) : (
                <div>No metrics data available.</div>
            )}
        </div>
    );
};

export default Analytics;