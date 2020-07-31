let express = require("express");

// Set Up Express App
let app = express();
let PORT = process.env.PORT || 8080;

// Require Models to Sync
let db = require("./models");

// Express App Parse Data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Directory
app.use(express.static("public"));

// Create Routes

// Sync Sequelize to listen to PORT
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});