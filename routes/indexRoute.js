const Router = require('express').Router();
const {getHomepage} = require('../controllers/indexController');

Router.get('/', getHomepage);

module.exports = Router;