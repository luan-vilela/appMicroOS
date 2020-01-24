const Sequilize = require('sequelize');
const connection = require('../src/database');
const Peca = require('./Peca');
const Funcionario = require('./Funcionario');

const Historico = connection.define('historicos', {
    tipoDoc: {
        type: Sequilize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    laudo: {
        type: Sequilize.TEXT
    },
    saida: {
        type: Sequilize.DATE
    }
});

// key fk
// Historico.belongsTo(Funcionario);
// Pecas.hasMany(Historico)

Historico.hasMany(Peca, {as: 'pecas', foreignKey: 'historicoId'});
Peca.belongsTo(Historico)



Historico.sync({force: false});

module.exports = Historico;