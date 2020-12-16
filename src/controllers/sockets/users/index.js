import socketIO from 'socket.io';
import * as Model from '../../../models/users';
import { socketHandler } from '../../../middlewares/error-handler';

const StartSocketServer = (server) => {
  const io = socketIO(server);
  io.on('connection', function (socket) {
    socket.on('alguienTermino', socketHandler(async (msg) => {
      await Model.heterminado(msg.alumnoId);
      io.emit('alguienTermino', msg);
    }));
  })
};