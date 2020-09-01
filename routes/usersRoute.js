const Router = require('express').Router();
const { getUsers, getUser, postUser, deleteUser, login } = require('../controllers/usersController');
const { validateUser } = require('../middlewares/validator');
const { authToken } = require('../middlewares/authenticator');

Router.get('/', authToken, getUsers);
Router.get('/:id', getUser);
Router.post('/', validateUser(), postUser);
Router.post('/login', login)
Router.delete('/:id', authToken, deleteUser);

module.exports = Router;