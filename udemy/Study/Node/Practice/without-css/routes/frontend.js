const express = require('express');
const routes = express.Router();
const front_get_ctrl = require('../controller/frontend.ctrl');

routes.get('', front_get_ctrl.getHome);

routes.get('/shop', front_get_ctrl.getShop);

routes.get('/detail', front_get_ctrl.getProductDetail);

routes.get('/cart', front_get_ctrl.getCart);

module.exports = routes;