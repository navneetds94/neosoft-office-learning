const mongoose = require('mongoose')
const url = 'mongodb+srv://navneet:mrg8TgZUkdvXB20b@cluster0.wv1eg4z.mongodb.net/';
const pool = mongoose.connect(url)
.then((x) => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch((err) => {
  console.error('Error connecting to mongo', err.reason)
})


module.exports = pool
