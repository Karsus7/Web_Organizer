let express = require("express");

// Set up Express app
let app = express();
let PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//load view engine -- pug
// app.set('views', path.join(__dirname, './public/assets/views'));
// app.set('view engine', 'pug');

//TEST ROUTE - can be moved to routes later.
// app.get('/', function(req, res){
//  res.render('members');
// })


<<<<<<< HEAD
=======



>>>>>>> 86115b53fde9f70ebc717c15bcaa817e7dd52ffa
// Static directory
app.use(express.static("public"));

// Routes
require("./routes/users-api-routes")(app);


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});
