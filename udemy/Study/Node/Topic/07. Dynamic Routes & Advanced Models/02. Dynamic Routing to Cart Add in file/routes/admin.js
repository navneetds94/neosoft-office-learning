const adminController = require('../controllers/admin-ctrl')
const express = require('express');
const routes = express.Router();

routes.get('/add-product',adminController.getAddProducts);
routes.post('/submit-product', adminController.postAddProduct);

module.exports = routes;