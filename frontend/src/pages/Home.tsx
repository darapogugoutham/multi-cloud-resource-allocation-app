import React from 'react';
import TabbedView from '../components/TabbedView';

const Home: React.FC = () => {
    return (
        <div className="fade-in">
            <div className="hero">
                <h1>Multi-Cloud Resource Allocation</h1>
                <p>Intelligently manage and allocate resources across AWS, Azure, and GCP with real-time monitoring and optimization</p>
            </div>

            <div style={{ marginTop: '3rem' }}>
                <h2 className="section-title">Cloud Management</h2>
                <TabbedView />
            </div>
        </div>
    );
};

export default Home;