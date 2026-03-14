import React, { useEffect, useState } from 'react';
import { fetchMetrics } from '../services/api';
import { MetricData } from '../types';

interface PerformanceMetricsProps {
    data?: MetricData[];
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ data: externalData }) => {
    const [metrics, setMetrics] = useState<MetricData[]>(externalData || []);
    const [loading, setLoading] = useState<boolean>(!externalData);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (externalData) {
            setMetrics(externalData);
            setLoading(false);
            return;
        }

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
    }, [externalData]);

    if (loading) {
        return <div className="loading"><div className="spinner"></div> Loading metrics...</div>;
    }

    if (error) {
        return <div className="error-message">⚠️ {error}</div>;
    }

    return (
        <div className="card fade-in">
            <h3>📊 Performance Metrics</h3>
            <div className="grid" style={{ marginTop: '1.5rem' }}>
                {metrics.map((metric) => (
                    <div key={metric.id} className="metric-card">
                        <div className="metric-card-label">{metric.resourceId}</div>
                        <div style={{ marginTop: '1rem' }}>
                            <div className="resource-meter">
                                <div className="meter-label">
                                    <span>CPU</span>
                                    <span style={{ fontWeight: '700' }}>{metric.cpuUsage}%</span>
                                </div>
                                <div className="meter-bar" style={{ background: 'rgba(255,255,255,0.2)' }}>
                                    <div className="meter-fill" style={{ width: `${metric.cpuUsage}%`, background: '#fbbf24' }}></div>
                                </div>
                            </div>
                            <div className="resource-meter">
                                <div className="meter-label">
                                    <span>Memory</span>
                                    <span style={{ fontWeight: '700' }}>{metric.memoryUsage}%</span>
                                </div>
                                <div className="meter-bar" style={{ background: 'rgba(255,255,255,0.2)' }}>
                                    <div className="meter-fill" style={{ width: `${metric.memoryUsage}%`, background: '#60a5fa' }}></div>
                                </div>
                            </div>
                            <div className="resource-meter">
                                <div className="meter-label">
                                    <span>Disk</span>
                                    <span style={{ fontWeight: '700' }}>{metric.diskUsage}%</span>
                                </div>
                                <div className="meter-bar" style={{ background: 'rgba(255,255,255,0.2)' }}>
                                    <div className="meter-fill" style={{ width: `${metric.diskUsage}%`, background: '#ec4899' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerformanceMetrics;