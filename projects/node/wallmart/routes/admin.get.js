const express = require('express');
const adminCtrl_get = require('../controllers/admin.get.ctrl');

const routes = express.Router();

routes.get('/login', adminCtrl_get.getLogin);
routes.get('/dashboard', adminCtrl_get.getDashboard);
routes.get('/products', adminCtrl_get.getProducts);

module.exports = routes;