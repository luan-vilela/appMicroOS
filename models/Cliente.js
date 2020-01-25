const Sequelize = require('sequelize');
const connection = require('../src/database');


const Cliente = connection.define('clientes', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.ENUM,
        values: ['Física', 'Jurídica'],
        allowNull: false,

    },
    documento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    } 
});



Cliente.sync({force: false});

module.exports = Cliente;