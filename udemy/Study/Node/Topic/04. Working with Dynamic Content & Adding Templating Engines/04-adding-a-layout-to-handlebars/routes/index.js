const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index',
    {
        pageTtitle:"Home",
        path:"/",
        activeHome: true
    })
})

module.exports = router;