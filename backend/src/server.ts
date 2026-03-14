import express from 'express';
import bodyParser from 'body-parser';
import { setResourceRoutes } from './routes/resources';
import { setMetricsRoutes } from './routes/metrics';

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setResourceRoutes(app);
setMetricsRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});