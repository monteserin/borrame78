import express from 'express';
import http from 'http';
import Middlewares from './application/middlewares';
import ApiControllers from './controllers/api';
import Documentation from './application/documentation';
import ConnectDatabase from './application/database';

const app = express();
/*
Heroku utiliza la variable de entorno process.env.port para asignar el puerto donde se va ejecutar el servidor,
por eso la hemos definido en esta plantilla
*/
const port = process.env.PORT;

Documentation(app);
Middlewares(app);
ApiControllers(app);
ConnectDatabase(() => {
    const server = http.createServer(app);
    server.listen(port, () => console.log(`Server listening to http://localhost:${port}`));
});