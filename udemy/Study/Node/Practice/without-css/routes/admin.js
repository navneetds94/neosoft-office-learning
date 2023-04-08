const express = require('express');
const routes = express.Router();
const admin_ctrl = require('../controller/admin.ctrl');

routes.get('', admin_ctrl.getAdmin);

routes.get('/add-product', admin_ctrl.getAddProduct);
routes.post('/submit-product', admin_ctrl.postSubmitProduct);

routes.get('/edit-product/:productId', admin_ctrl.getEditProduct);
routes.post('/update-product', admin_ctrl.postEditProduct);

routes.get('/admin-products', admin_ctrl.getAdminProducts);

routes.get('/product-detail/:productId', admin_ctrl.getAdminProductDetail);

module.exports = routes;