const express = require('express');
const adminCtrl_post = require('../controllers/admin.post.ctrl');

const routes = express.Router();


routes.post('/submin-login', adminCtrl_post.submitLogin);

module.exports = routes;