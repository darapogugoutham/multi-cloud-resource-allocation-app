export interface Resource {
    id: string;
    name: string;
    type: string;
    status: string;
    provider: string;
    allocationDate: Date;
}

export interface Metric {
    id: string;
    resourceId: string;
    cpuUsage: number;
    memoryUsage: number;
    diskUsage: number;
    timestamp: Date;
}

export interface AllocationStrategy {
    strategyName: string;
    resourceRequirements: Resource[];
    targetProviders: string[];
}

// Type aliases for convenience
export type MetricData = Metric;