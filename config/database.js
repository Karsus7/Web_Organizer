// Set up a Sequelize Connection
const Sequelize = require('sequelize');

// To access from other files
module.exports = new Sequelize('weborgdb', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});