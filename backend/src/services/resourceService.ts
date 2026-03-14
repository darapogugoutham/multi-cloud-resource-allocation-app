interface ResourceAllocation {
    resources: { [key: string]: number };
    strategy: string;
    timestamp: Date;
    id: string;
}

class ResourceService {
    private allocations: ResourceAllocation[] = [];
    private currentAllocation: ResourceAllocation | null = null;

    allocateResources(data: { resources: { [key: string]: number }; strategy: string }) {
        const allocation: ResourceAllocation = {
            ...data,
            timestamp: new Date(),
            id: `alloc-${Date.now()}`
        };
        
        this.allocations.push(allocation);
        this.currentAllocation = allocation;
        
        console.log('Resources allocated:', allocation);
        return {
            success: true,
            allocationId: allocation.id,
            details: allocation
        };
    }

    getCurrentAllocation() {
        return this.currentAllocation;
    }

    getAllAllocations() {
        return this.allocations;
    }

    // Generate metrics based on current allocation
    generateMetrics() {
        if (!this.currentAllocation) {
            // Default metrics if nothing allocated
            return [
                {
                    id: '1',
                    resourceId: 'res-001',
                    cpuUsage: 45.5,
                    memoryUsage: 62.3,
                    diskUsage: 78.9,
                    timestamp: new Date().toISOString()
                },
                {
                    id: '2',
                    resourceId: 'res-002',
                    cpuUsage: 32.1,
                    memoryUsage: 48.7,
                    diskUsage: 65.2,
                    timestamp: new Date().toISOString()
                },
                {
                    id: '3',
                    resourceId: 'res-003',
                    cpuUsage: 58.3,
                    memoryUsage: 71.4,
                    diskUsage: 82.1,
                    timestamp: new Date().toISOString()
                }
            ];
        }

        // Generate metrics based on allocation distribution
        const { resources } = this.currentAllocation;
        const providers = Object.entries(resources);
        
        // Create metrics for each allocated provider
        const metrics = providers.map((entry, idx) => {
            const [provider, allocation] = entry;
            const baseMetrics = {
                AWS: { cpu: 45, memory: 62, disk: 78 },
                Azure: { cpu: 50, memory: 55, disk: 72 },
                GCP: { cpu: 35, memory: 48, disk: 65 }
            };

            const base = baseMetrics[provider as keyof typeof baseMetrics] || { cpu: 40, memory: 50, disk: 70 };
            
            // Adjust metrics based on allocation percentage
            const factor = allocation / 33.33; // Normalize to typical 33% base
            
            return {
                id: String(idx + 1),
                resourceId: `res-${String(idx + 1).padStart(3, '0')}`,
                cpuUsage: Math.round((base.cpu * factor + Math.random() * 5) * 10) / 10,
                memoryUsage: Math.round((base.memory * factor + Math.random() * 5) * 10) / 10,
                diskUsage: Math.round((base.disk * factor + Math.random() * 3) * 10) / 10,
                provider: provider,
                allocatedPercentage: allocation,
                timestamp: new Date().toISOString()
            };
        });

        return metrics;
    }

    getResourceStatus(resourceId: string) {
        if (!this.currentAllocation) {
            return { status: 'idle', message: 'No resources allocated' };
        }

        return {
            resourceId,
            status: 'active',
            allocation: this.currentAllocation,
            lastUpdate: new Date().toISOString()
        };
    }
}

export const resourceService = new ResourceService();
