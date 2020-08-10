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
      use_env_variable : JAWSDB_URL,
      host: '127.0.0.1',
      dialect: 'mysql'
  }
  
  // if (process.env.JAWSDB_URL) {
  //   connection = mysql.createConnection(process.env.JAWSDB_URL);
  // }else {
  //   connection = mysql.createConnection({
  //     host: 'localhost',
  //     user: 'root',
  //     password: process.env.DB_PASSWORD,
  //     database: process.env.DB_NAME
  //   })
}