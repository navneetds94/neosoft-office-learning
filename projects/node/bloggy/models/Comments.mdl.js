const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Comments = sequelize.define('comments', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comment: {
        type: Sequelize.STRING,
        autoNull: false
    }
})

module.exports = Comments;