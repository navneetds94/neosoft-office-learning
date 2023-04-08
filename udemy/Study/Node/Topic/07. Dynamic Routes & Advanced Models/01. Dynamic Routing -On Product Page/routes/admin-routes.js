const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

// login page
router.get('/',adminController.getLogin);

// dashboard page
router.get('/dashboard',adminController.getDashboard);

// product page
router.get('/products',adminController.getProducts);
router.post('/submit-product',adminController.addProduct);
router.get('/product-detail/:productId',adminController.getProductDetail);
router.post('/product-detail',adminController.getProductDetail);
router.get('/edit-product',adminController.editProduct);

// blogs page
router.get('/blogs',adminController.getBlogs);
router.get('/blog-detail',adminController.getBlogDetail);

module.exports = router