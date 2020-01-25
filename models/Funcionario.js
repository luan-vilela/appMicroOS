const Sequelize = require('sequelize');
const connection = require('../src/database');

const Funcionario = connection.define('funcionarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codFuncionario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Funcionário'
    },
    codCarga: {
        type: Sequelize.INTEGER
    },
    salario: {
        type: Sequelize.REAL
    },
    comissao: {
        type: Sequelize.REAL
    },
    ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    demissao: {
        type: Sequelize.DATE
    }

});

Funcionario.sync({force: false});

module.exports = Funcionario;