// require('../dotenv').config()

module.exports = {
    development: {
      username: "root",
      password: "password",
      database: "weborgdb",
      host:     "localhost",
      dialect:  "mysql"
    },
    test: {
      username: "root",
      password: null,
      database: "database_test",
      host: "127.0.0.1",
      dialect: "mysql"
    },
    production: {
      username: "root",
      password: "null",
      database: "database_production",
      host: "127.0.0.1",
      dialect: "mysql"
    }
  };
  

// const db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })
// Dynamic configuration
// The configuration file is by default a JSON file called config.json. But sometimes you need a dynamic configuration, for example to access environment variables or execute some other code to determine the configuration.

// Thankfully, the Sequelize CLI can read from both .json and .js files. This can be setup with .sequelizerc file. You just have to provide the path to your .js file as the config option of your exported object:

// const path = require('path');

// module.exports = {
//   'config': path.resolve('config', 'config.js')
// }