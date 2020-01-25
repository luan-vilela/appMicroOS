const Sequelize = require('sequelize');
const connection = require('../src/database');
const Funcionario = require('./Funcionario')

const Historico = connection.define('historicos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipoDoc: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    laudo: {
        type: Sequelize.TEXT
    },
    saida: {
        type: Sequelize.DATE
    }
});

Historico.belongsTo(Funcionario)

Historico.sync({force: false});

module.exports = Historico;