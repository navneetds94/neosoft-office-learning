const express = require('express');
const routes = express.Router();
const productController = require('../controller/product-ctrl');

routes.get('/products', productController.getProduct)

routes.post('/submit-product', productController.addProduct)

module.exports = routes