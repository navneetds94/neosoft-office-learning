const express = require('express');
const routes = express.Router();
const ctrl = require('../ctrls/front.ctrl');

// Home
routes.get('/',ctrl.getHome);

// Login
routes.get('/login',ctrl.getLogin);
routes.post('/login',ctrl.postLogin);
routes.post('/logout',ctrl.postLogout);

// Register
routes.get('/register',ctrl.getRegister);
routes.post('/submit-user',ctrl.postRegister);
routes.post('/verify-otp',ctrl.postVerifyOtp);

routes.get('/register-successfull',ctrl.getRegisterSuccessful);

// write-post
routes.get('/write-post', ctrl.getWritePost);
routes.post('/add-post', ctrl.postWritePost);

// post-detail page
routes.get('/post-detail/:blogId', ctrl.getPostDetail)

module.exports = routes;