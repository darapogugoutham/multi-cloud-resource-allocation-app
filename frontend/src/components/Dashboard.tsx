import React from 'react';
import ResourceAllocator from '../components/ResourceAllocator';
import PerformanceMetrics from '../components/PerformanceMetrics';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ResourceAllocator />
            <PerformanceMetrics />
        </div>
    );
};

export default Dashboard;