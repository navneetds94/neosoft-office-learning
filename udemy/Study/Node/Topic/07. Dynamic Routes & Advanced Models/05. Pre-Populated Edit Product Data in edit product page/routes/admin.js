const adminController = require('../controllers/admin-ctrl')
const express = require('express');
const routes = express.Router();

routes.get('/add-product',adminController.getAddProducts);
routes.post('/submit-product', adminController.postAddProduct);
routes.get('/products', adminController.getProducts);
routes.get('/edit-product/:productId', adminController.getEditProduct);

routes.post('/update-product',adminController.postEditProduct);

module.exports = routes;