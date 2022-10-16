import express from 'express';
import config from './config'
import sillaRoutes  from './routes/silla.routes'
import usuarioRoutes from './routes/usuario.routes'


const app = express();
const cors = require('cors')

//settings
app.set('port', config.port);

// USAR CORS
app.use(cors())

app.use(sillaRoutes);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(usuarioRoutes);

export default app