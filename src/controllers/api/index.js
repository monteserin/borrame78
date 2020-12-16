import UsersController from './users';

export default function (app) {
  // Private
  app.use('/users', UsersController);

  app.use('/', (req, res) => res.send(`Working like a charm ٩(^‿^)۶`));
}
