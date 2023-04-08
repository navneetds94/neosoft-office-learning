const express = require('express');
const routes = express.Router();
const indexController = require('../controller/index-ctrl');

routes.get('/',indexController.getHomePage)


module.exports = routes