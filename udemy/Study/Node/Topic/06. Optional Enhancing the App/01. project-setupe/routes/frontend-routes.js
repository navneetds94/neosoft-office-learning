const express = require('express');
const router = express.Router();
const frontendControler = require('../controllers/frontend');

// home page routes
router.get('/',frontendControler.getHomePage);

// shop routes
router.get('/cart',frontendControler.getShopingCart);
router.get('/products',frontendControler.getProducts);
router.get('/product-detail',frontendControler.getProductDetail);
router.get('/checkout',frontendControler.getCheckout);
router.get('/order-confirm',frontendControler.getOrderConfirm);

// contact routes
router.get('/contact',frontendControler.getContactPage);

// login routes
router.get('/login',frontendControler.getLoginPage);

// blog routes
router.get('/blogs',frontendControler.getBlogsPage);
router.get('/blog-detail',frontendControler.getBlogDetailPage);

// my account routes
router.get('/order-tracking',frontendControler.getOrderTracking);
router.get('/my-orders',frontendControler.getOrders);

module.exports = router;