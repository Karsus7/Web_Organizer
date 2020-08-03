let express = require("express");
const path = require('path');

// Set Up Express App
let app = express();
let PORT = process.env.PORT || 8080;

// Require Models to Sync
let db = require("./models");

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

// Static Directory
app.use(express.static("public"));

// Create Routes
// require("./routes/api-routes")(app);
require("./routes/bookmark-api-routes")(app);
// require("./routes/html-routes")(app);
require("./routes/user-api-routes")(app);

// Sync Sequelize to listen to PORT
// db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
// });