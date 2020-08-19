require('dotenv').config()

module.exports = {
    development: {
      username: 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host:     'localhost',
      dialect:  'mysql'
    },
    test: {
      username: 'root',
      password: null,
      database: 'database_test',
      host: '127.0.0.1',
      dialect: 'mysql'
    },
    production: {
      username: 'root',
      password: 'null',
      database: 'database_production',
      host: '127.0.0.1',
      dialect: 'mysql'
  }
}


var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'process.env.DB_PASSWORD',
        database: 'process.env.DB_NAME'
    })
};

var mysql = require('mysql');





