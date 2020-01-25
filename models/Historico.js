const Sequelize = require('sequelize');
const connection = require('../src/database');
const Funcionario = require('./Funcionario')
const OS = require('./OS');

const Historico = connection.define('historicos', {
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

//Relacionamento
Historico.belongsTo(Funcionario)
Historico.belongsTo(OS)

Historico.sync({force: false});

module.exports = Historico;