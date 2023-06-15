const express = require('express');
const employeeRoute = express.Router();
let Employee = require('../models/Employee');

employeeRoute.route('/').get((req, res) => {
  console.log("Get Employee")
  Employee.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


module.exports = employeeRoute;
