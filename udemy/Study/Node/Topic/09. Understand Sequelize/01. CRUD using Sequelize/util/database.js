// const mysql = require('mysql2');
// const pool = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database:'mystore',
//     password: '1234567890'
// })
// module.exports = pool.promise();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mystore','root','1234567890',{dialect:'mysql', host:'localhost'});

module.exports = sequelize;