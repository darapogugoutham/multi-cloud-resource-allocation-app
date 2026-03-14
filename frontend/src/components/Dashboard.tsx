import React from 'react';
import TabbedView from './TabbedView';

const Dashboard: React.FC = () => {
    return (
        <div className="fade-in">
            <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
                <div className="card">
                    <h3>🚀 Quick Stats</h3>
                    <div style={{ marginTop: '1.5rem' }}>
                        <div className="metric-card">
                            <div className="metric-card-label">Active Resources</div>
                            <div className="metric-card-value">142</div>
                            <div className="metric-card-unit">instances</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h3>📊 System Health</h3>
                    <div style={{ marginTop: '1.5rem' }}>
                        <div className="metric-card">
                            <div className="metric-card-label">Overall Status</div>
                            <div className="metric-card-value" style={{ color: '#4ade80' }}>✓ Healthy</div>
                            <div className="metric-card-unit">All systems operational</div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="section-title">Management & Monitoring</h2>
            <TabbedView />
        </div>
    );
};

export default Dashboard;