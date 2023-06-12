const express = require('express');
const route = express.Router();

route.get('/user',(req,res)=>{
  res.send({data:"User"});
})

module.exports = route;
