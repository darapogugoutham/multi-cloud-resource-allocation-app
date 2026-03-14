import React, { useState } from 'react';
import ResourceAllocator from './ResourceAllocator';
import PerformanceMetrics from './PerformanceMetrics';

const TabbedView: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'allocate' | 'metrics'>('allocate');

    return (
        <div className="fade-in">
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '2px solid #e0e0e0' }}>
                <button
                    onClick={() => setActiveTab('allocate')}
                    style={{
                        padding: '1rem 2rem',
                        background: activeTab === 'allocate' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
                        color: activeTab === 'allocate' ? 'white' : '#666',
                        border: 'none',
                        borderBottom: activeTab === 'allocate' ? '3px solid #667eea' : 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                    }}
                >
                    🔧 Resource Allocator
                </button>
                <button
                    onClick={() => setActiveTab('metrics')}
                    style={{
                        padding: '1rem 2rem',
                        background: activeTab === 'metrics' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
                        color: activeTab === 'metrics' ? 'white' : '#666',
                        border: 'none',
                        borderBottom: activeTab === 'metrics' ? '3px solid #667eea' : 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                    }}
                >
                    📊 Performance Metrics
                </button>
            </div>

            {activeTab === 'allocate' && (
                <div style={{ animation: 'fadeIn 0.3s ease' }}>
                    <ResourceAllocator />
                </div>
            )}

            {activeTab === 'metrics' && (
                <div style={{ animation: 'fadeIn 0.3s ease' }}>
                    <PerformanceMetrics />
                </div>
            )}
        </div>
    );
};

export default TabbedView;
