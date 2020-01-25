const Sequelize = require('sequelize');
const connection = require('../src/database');
const Cliente = require('./Cliente');

const OS = connection.define('OSs', {
    numOS: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sequencia:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    aparelho: {
        type: Sequelize.STRING
    },
    modelo:{
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    observacao: {
        type: Sequelize.STRING
    },
    acessorio: {
        type: Sequelize.TEXT
    },
    defeito:{
        type: Sequelize.STRING
    },
    valor:{
        type: Sequelize.REAL
    },
    saida: {
        type: Sequelize.DATE
    }
});

OS.belongsTo(Cliente)

OS.sync({force: false});

module.exports = OS;
