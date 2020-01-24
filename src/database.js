const Sequilize = require('sequelize');
const CONFIG = require('./config')

const connection = new Sequilize(
    CONFIG.DB.database,
    CONFIG.DB.username,
    CONFIG.DB.password,
    CONFIG.DB.option
    )

module.exports = connection;