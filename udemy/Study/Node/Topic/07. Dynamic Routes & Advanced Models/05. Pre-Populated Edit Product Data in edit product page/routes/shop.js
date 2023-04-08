const shopController = require('../controllers/shop-ctrl');
const express = require('express');
const routes = express.Router();

routes.get('/',shopController.getHomePage);
routes.get('/shop',shopController.getShop);
routes.get('/product-detail/:productId',shopController.getSingleProduct)

routes.get('/cart',shopController.getCart);
routes.post('/cart',shopController.postCart);

module.exports = routes;