import { Request, Response } from 'express';
import { resourceService } from '../services/resourceService';

export class ResourceController {
    allocateResources = (req: Request, res: Response) => {
        try {
            console.log('=== POST /api/resources/allocate ===');
            const { resources, strategy } = req.body;
            console.log('Request body:', { resources, strategy });
            
            if (!resources || Object.keys(resources).length === 0) {
                console.log('Returning 400: No resources');
                return res.status(400).json({ error: 'No resources specified' });
            }

            console.log('Calling resourceService.allocateResources...');
            const result = resourceService.allocateResources({ resources, strategy: strategy || 'default' });
            console.log('Service returned:', result);
            console.log('Sending JSON response...');
            res.json(result);
            console.log('=== Response sent ===');
        } catch (error) {
            console.error('=== ALLOCATION ERROR ===', error);
            res.status(500).json({ error: String(error) });
        }
    };

    async getResourceStatus(req: Request, res: Response) {
        try {
            const { resourceId } = req.params;
            const status = resourceService.getResourceStatus(resourceId || 'current');
            res.status(200).json(status);
        } catch (error) {
            console.error('Status error:', error);
            res.status(500).json({ error: 'Failed to retrieve resource status' });
        }
    }
}