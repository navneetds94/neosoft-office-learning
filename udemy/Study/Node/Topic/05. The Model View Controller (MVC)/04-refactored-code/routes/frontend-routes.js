const express = require('express');
const router = express.Router()
router.get('/frontend',(req,res)=>{
    res.render('others/frontend');
})

module.exports = router;