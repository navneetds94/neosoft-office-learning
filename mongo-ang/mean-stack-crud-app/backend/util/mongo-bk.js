const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://navneet:mrg8TgZUkdvXB20b@cluster0.wv1eg4z.mongodb.net/';
const client = new MongoClient(url);
const dbName = 'ecommerce';

const mongoConnect = callback => {
  client.connect()
  .then(()=>{
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users')
    console.log(collection)
    // return collection
    callback(collection)
  })
  .catch(err => console.log(err))
}

module.exports = mongoConnect
