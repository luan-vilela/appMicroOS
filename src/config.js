const SERVER_PORT = 3000;
const USER = 'luan';
const PASS = '123';
const DATABASE = 'BancoSQL';
const HOST = 'localhost';
const DIALECT = 'mysql';
const TIMEZONE = "-04:00";
const LOGGING = false

// Configurações banco de dados
const DB = {
    username: USER,
    password: PASS,
    database: DATABASE,
    option: {
        host: HOST,
        dialect: DIALECT,
        timezone: TIMEZONE,
        logging: LOGGING
    }
}

module.exports = {
    SERVER_PORT,
    DB
}