const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/dashboard',adminController.getDashboard);
router.get('/products',adminController.getProducts);
router.post('/submit-product',adminController.addProduct);

module.exports = router