const Sequelize = require('sequelize');
const connection = require('../src/database');

const Funcionario = connection.define('funcionarios', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codFuncionario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false
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