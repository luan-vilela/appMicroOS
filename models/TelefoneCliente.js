const Sequelize = require('sequelize');
const connection = require('../src/database');
const Cliente = require('./Cliente');

const Telefone = connection.define('telefoneClientes', {
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Telefone.belongsTo(Cliente);

Telefone.sync({force: false});


module.exports = Telefone;