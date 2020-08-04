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

//load view engine -- pug
app.set('views', path.join(__dirname, './public/assets/views'));
app.set('view engine', 'pug');

//TEST ROUTE - can be moved to routes later.
app.get('/', function(req, res){
  res.render('members');
})

// Express App Parse Data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let app = express();

app.get('/', (req, res) => res.send('INDEX'));

// User Routes
app.use('/users', require('./routes/users'));

let PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));