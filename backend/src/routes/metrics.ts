import { Router, Express } from 'express';
import { MetricsController } from '../controllers/metricsController';

const router = Router();
const metricsController = new MetricsController();

export const setMetricsRoutes = (app: Express) => {
    app.use('/api/metrics', router);
    router.get('/', metricsController.getMetrics.bind(metricsController));
    router.get('/historical', metricsController.getHistoricalData.bind(metricsController));
};