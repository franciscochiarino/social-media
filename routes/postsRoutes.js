const Router = require('express').Router();
const { getPosts, postPost, putPost, deletePost } = require('../controllers/postsController');

Router.get('/', getPosts);
Router.post('/', postPost);
Router.put('/:id', putPost);
Router.delete('/:id', deletePost);

module.exports = Router;