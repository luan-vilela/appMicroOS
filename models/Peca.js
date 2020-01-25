const {Sequelize} = require('sequelize');
const connection = require('../src/database');
const Historico = require('./Historico');
// const Funcionario = require('./Funcionario');

const Peca = connection.define('pecas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.REAL,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

// Peca.belongsToMany(Historico, {through: 'UserProject'});
// Historico.belongsToMany(Peca, {through: 'UserProject'});

Peca.belongsTo(Historico)
Historico.hasMany(Peca)

Peca.sync({force: false});

module.exports = Peca;