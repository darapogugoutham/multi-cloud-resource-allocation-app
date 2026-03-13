import { Router } from 'express';
import MetricsController from '../controllers/metricsController';

const router = Router();
const metricsController = new MetricsController();

export const setMetricsRoutes = (app) => {
    app.use('/api/metrics', router);
    router.get('/', metricsController.getMetrics.bind(metricsController));
    router.get('/historical', metricsController.getHistoricalData.bind(metricsController));
};