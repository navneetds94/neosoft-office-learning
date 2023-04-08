const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    // console.log('Index Page')
    // res.send("<h1>This is a Home page</h1>")
    res.sendFile(path.join(__dirname,"../","views","index.html"))
})

module.exports = router;