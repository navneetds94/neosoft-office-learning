const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Blog = sequelize.define('blogs', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slides:  {
        type: Sequelize.STRING,
        allowNull: true
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Blog;