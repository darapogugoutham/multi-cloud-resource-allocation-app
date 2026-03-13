import express from 'express';
import bodyParser from 'body-parser';
import { setResourceRoutes } from './routes/resources';
import { setMetricsRoutes } from './routes/metrics';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setResourceRoutes(app);
setMetricsRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});