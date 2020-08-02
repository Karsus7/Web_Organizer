// Require Dependencies
let express = require('express');
// let pug = require('pug-cli');
let bodyParser = require('body-parser');
let path = require('path');

// Database
let db = require('./config/database');

// Test Sequelize db connection
db.authenticate()
  .then(() => console.log('Database Connected...!'))
  .catch(err => console.log('Error' + err))

let app = express();

app.get('/', (req, res) => res.send('INDEX'));

// User Routes
app.use('/users', require('./routes/users'));

let PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));