const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    // console.log('Index Page')
    res.send("<h1>This is a Home page</h1>")
})

module.exports = router;