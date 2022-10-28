import express from 'express';
import config from './config'
import sillaRoutes  from './routes/silla.routes'
import usuarioRoutes from './routes/usuario.routes'
import reservaRoutes from './routes/reserva.routes'
const bp = require('body-parser')
var livereload = require('livereload');
var connectLiveReload = require('connect-live-reload');

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();
const cors = require('cors')

app.use(connectLiveReload());

//settings
app.set('port', config.port);

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }))

// USAR CORS
app.use(cors())

app.use(sillaRoutes);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(usuarioRoutes);

app.use(reservaRoutes);

export default app