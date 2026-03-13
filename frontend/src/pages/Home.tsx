import React from 'react';
import Dashboard from '../components/Dashboard';
import ResourceAllocator from '../components/ResourceAllocator';
import PerformanceMetrics from '../components/PerformanceMetrics';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Multi-Cloud Resource Allocation</h1>
            <Dashboard />
            <ResourceAllocator />
            <PerformanceMetrics />
        </div>
    );
};

export default Home;