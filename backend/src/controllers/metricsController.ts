import { Request, Response } from 'express';
import { resourceService } from '../services/resourceService';

export class MetricsController {
    async getMetrics(req: Request, res: Response) {
        try {
            // Logic to retrieve current performance metrics
            const metrics = await this.fetchMetrics();
            res.status(200).json(metrics);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving metrics', error });
        }
    }

    async getHistoricalData(req: Request, res: Response) {
        try {
            // Logic to retrieve historical performance data
            const historicalData = await this.fetchHistoricalData();
            res.status(200).json(historicalData);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving historical data', error });
        }
    }

    async fetchMetrics() {
        // Return metrics based on current resource allocation
        return resourceService.generateMetrics();
    }

    async fetchHistoricalData() {
        // Return allocation history
        const allocations = resourceService.getAllAllocations();
        
        if (allocations.length === 0) {
            return {
                message: 'No allocation history yet',
                allocations: 0
            };
        }

        return allocations.map((alloc, idx) => ({
            id: `hist-${idx}`,
            timestamp: alloc.timestamp,
            allocation: alloc,
            summary: {
                totalAllocated: Object.values(alloc.resources).reduce((a, b) => a + b, 0),
                strategy: alloc.strategy,
                providers: Object.keys(alloc.resources)
            }
        }));
    }
}