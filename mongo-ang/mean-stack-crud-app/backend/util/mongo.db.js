const mongoose = require('mongoose');
const uri = "mongodb+srv://navneet94:612CvanxJkvdb9zb@cluster0.vki7ing.mongodb.net/?retryWrites=true&w=majority";
const connection = mongoose.connect(uri)

module.exports = connection
