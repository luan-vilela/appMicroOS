const Sequelize = require('sequelize');
const connection = require('../src/database');


const OS = connection.define('OS', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    defeito: {
        type: Sequelize.TEXT
    },
    acessorio:{
        type: Sequelize.STRING
    }
    valor:{
        type: Sequelize.REAL
    },
    saida: {
        type: Sequelize.DATE
    }
});


OS.sync({force: false});

module.exports = OS;
