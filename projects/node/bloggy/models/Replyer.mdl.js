const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Replyer = sequelize.define('replyer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    commentId: {
        type: Sequelize.INTEGER,
        autoNull: false
    },
    to: {
        type: Sequelize.INTEGER,
        autoNull: false
    },
    by: {
        type: Sequelize.INTEGER,
        autoNull: false
    },
    type: {
        type: Sequelize.STRING,
        autoNull: false
    },
    name: {
        type: Sequelize.STRING,
        autoNull: false
    },
    reply: {
        type: Sequelize.STRING,
        autoNull: false
    }
})

module.exports = Replyer;