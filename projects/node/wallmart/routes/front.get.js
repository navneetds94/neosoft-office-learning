const express = require('express');
const frontCtrl_get = require('../controllers/front.get.ctrl');

const routes = express.Router();

routes.get('/', frontCtrl_get.getHomePage);

module.exports = routes;