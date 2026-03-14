import React, { useState } from 'react';
import { allocateResources as allocateResourcesAPI } from '../services/api';

interface CloudProvider {
    name: string;
    icon: string;
}

const providers: CloudProvider[] = [
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🔷' },
    { name: 'GCP', icon: '📱' }
];

const ResourceAllocator: React.FC = () => {
    const [resources, setResources] = useState<{ [key: string]: number }>({});
    const [strategy, setStrategy] = useState<string>('default');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleResourceChange = (provider: string, amount: number) => {
        setResources(prevResources => ({
            ...prevResources,
            [provider]: amount,
        }));
        setError(null);
    };

    const allocateResources = async () => {
        if (Object.keys(resources).length === 0) {
            setError('Please allocate resources to at least one provider');
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const response = await allocateResourcesAPI({
                resources,
                strategy,
                timestamp: new Date().toISOString()
            });
            console.log('Allocation successful:', response);
            setSubmitted(true);
            setResources({});
            setStrategy('default');
            setTimeout(() => setSubmitted(false), 3000);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to allocate resources';
            setError(errorMessage);
            console.error('Allocation error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card fade-in">
            <h3>🔧 Resource Allocator</h3>
            
            <div className="form-group" style={{ marginTop: '1.5rem' }}>
                <label>Select Allocation Strategy</label>
                <select 
                    value={strategy}
                    onChange={(e) => setStrategy(e.target.value)}
                    disabled={loading}
                >
                    <option value="default">⚖️ Default (Balanced)</option>
                    <option value="roundRobin">🔄 Round Robin</option>
                    <option value="leastLoaded">📥 Least Loaded</option>
                </select>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1.5rem', color: '#333', fontSize: '1rem', fontWeight: '600' }}>Cloud Providers</h4>
                <div className="grid">
                    {providers.map((provider) => (
                        <div key={provider.name} className="form-group">
                            <label>{provider.icon} {provider.name}</label>
                            <input
                                type="number"
                                min="0"
                                max="100"
                                placeholder="Allocation %"
                                value={resources[provider.name] || ''}
                                onChange={(e) => handleResourceChange(provider.name, Number(e.target.value))}
                                disabled={loading}
                            />
                            {resources[provider.name] !== undefined && (
                                <div className="resource-meter">
                                    <div className="meter-bar">
                                        <div 
                                            className="meter-fill" 
                                            style={{ width: `${Math.min(resources[provider.name], 100)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <button 
                    className="btn btn-primary" 
                    onClick={allocateResources}
                    disabled={loading}
                >
                    {loading ? '⏳ Allocating...' : '✅ Allocate Resources'}
                </button>
                <button 
                    className="btn btn-secondary" 
                    onClick={() => {
                        setResources({});
                        setStrategy('default');
                        setError(null);
                    }}
                    disabled={loading}
                >
                    🔄 Reset
                </button>
            </div>

            {error && (
                <div style={{ 
                    marginTop: '1rem', 
                    padding: '1rem', 
                    background: '#fee2e2', 
                    border: '2px solid #ef4444',
                    borderRadius: '8px',
                    color: '#991b1b',
                    fontWeight: '500'
                }}>
                    ❌ {error}
                </div>
            )}

            {submitted && (
                <div style={{ 
                    marginTop: '1rem', 
                    padding: '1rem', 
                    background: '#e7f5e7', 
                    border: '2px solid #4ade80',
                    borderRadius: '8px',
                    color: '#166534',
                    fontWeight: '500'
                }}>
                    ✓ Resources allocated successfully!
                </div>
            )}
        </div>
    );
};

export default ResourceAllocator;