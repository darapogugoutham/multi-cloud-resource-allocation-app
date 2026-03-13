export interface Resource {
    id: string;
    name: string;
    type: string;
    status: string;
    allocatedTo: string;
}

export interface Metric {
    id: string;
    resourceId: string;
    timestamp: Date;
    cpuUsage: number;
    memoryUsage: number;
    networkTraffic: number;
}

export interface AllocationStrategy {
    strategyName: string;
    parameters: Record<string, any>;
}