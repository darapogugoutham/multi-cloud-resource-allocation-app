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
        return <div className="loading"><div className="spinner"></div> Loading analytics...</div>;
    }

    return (
        <div className="fade-in">
            <div className="hero" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'  }}>
                <h1>📈 Analytics Dashboard</h1>
                <p>Real-time performance analysis and insights across all cloud providers</p>
            </div>
            <div style={{ marginTop: '2rem' }}>
                {metricsData ? (
                    <PerformanceMetrics data={metricsData} />
                ) : (
                    <div className="card">
                        <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>📊 No metrics data available.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Analytics;