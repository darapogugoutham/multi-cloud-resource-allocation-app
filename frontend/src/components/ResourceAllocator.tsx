import React, { useState } from 'react';

const ResourceAllocator: React.FC = () => {
    const [resources, setResources] = useState<{ [key: string]: number }>({});
    const [strategy, setStrategy] = useState<string>('default');

    const handleResourceChange = (provider: string, amount: number) => {
        setResources(prevResources => ({
            ...prevResources,
            [provider]: amount,
        }));
    };

    const allocateResources = () => {
        // Logic to allocate resources based on the selected strategy
        console.log('Allocating resources:', resources, 'using strategy:', strategy);
        // Call API to allocate resources
    };

    return (
        <div>
            <h2>Resource Allocator</h2>
            <div>
                <label>
                    Cloud Provider:
                    <select onChange={(e) => handleResourceChange(e.target.value, resources[e.target.value] || 0)}>
                        <option value="AWS">AWS</option>
                        <option value="Azure">Azure</option>
                        <option value="GCP">GCP</option>
                    </select>
                </label>
                <input
                    type="number"
                    onChange={(e) => handleResourceChange('AWS', Number(e.target.value))}
                    placeholder="Amount"
                />
            </div>
            <div>
                <label>
                    Allocation Strategy:
                    <select onChange={(e) => setStrategy(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="roundRobin">Round Robin</option>
                        <option value="leastLoaded">Least Loaded</option>
                    </select>
                </label>
            </div>
            <button onClick={allocateResources}>Allocate Resources</button>
        </div>
    );
};

export default ResourceAllocator;