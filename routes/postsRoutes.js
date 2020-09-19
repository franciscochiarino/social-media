const Router = require('express').Router();
const { getPosts, postPost, putPost, deletePost } = require('../controllers/postsController');
const { authToken } = require('../middlewares/authenticator');


Router.get('/', getPosts);
Router.post('/', postPost);
Router.put('/:id', putPost);
Router.delete('/:id', authToken, deletePost);

module.exports = Router;