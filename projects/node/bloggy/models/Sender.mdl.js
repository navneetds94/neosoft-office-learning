const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Sender = sequelize.define('sender', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    commentId: {
        type: Sequelize.INTEGER,
        autoNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        autoNull: false
    },
    blogId: {
        type: Sequelize.INTEGER,
        autoNull: false
    },
    type: {
        type: Sequelize.STRING,
        autoNull: false
    }
})

module.exports = Sender;