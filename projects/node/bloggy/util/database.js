const db_config = require('./db-config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(db_config.DB, db_config.USER, db_config.PASSWORD, {
  dialect: db_config.dialect,
  host: db_config.HOST,
  pool: {
    max: db_config.pool.max,
    min: db_config.pool.min,
    acquire: db_config.pool.acquire,
    idle: db_config.pool.idle
  }
})

module.exports = sequelize;