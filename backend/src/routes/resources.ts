import { Router } from 'express';
import ResourceController from '../controllers/resourceController';

const router = Router();
const resourceController = new ResourceController();

export const setResourceRoutes = (app) => {
    app.use('/api/resources', router);
    router.post('/allocate', resourceController.allocateResources.bind(resourceController));
    router.get('/status', resourceController.getResourceStatus.bind(resourceController));
};