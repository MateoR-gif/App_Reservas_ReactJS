import express from 'express';
import config from './config'
import sillaRoutes  from './routes/silla.routes'

const app = express();

//settings
app.set('port', config.port);

app.use(sillaRoutes);

export default app