const express = require('express');
const otherControler = require('../controllers/other')
const router = express.Router();

router.get('/',otherControler.getPlatform)

module.exports = router