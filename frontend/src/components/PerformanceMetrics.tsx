import React, { useEffect, useState } from 'react';
import { fetchMetrics } from '../services/api';
import { MetricData } from '../types';

const PerformanceMetrics: React.FC = () => {
    const [metrics, setMetrics] = useState<MetricData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadMetrics = async () => {
            try {
                const data = await fetchMetrics();
                setMetrics(data);
            } catch (err) {
                setError('Failed to load metrics');
            } finally {
                setLoading(false);
            }
        };

        loadMetrics();
    }, []);

    if (loading) {
        return <div>Loading metrics...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Performance Metrics</h2>
            <ul>
                {metrics.map((metric) => (
                    <li key={metric.id}>
                        {metric.name}: {metric.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PerformanceMetrics;