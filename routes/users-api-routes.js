
var db = require("../models");

module.exports = function(app) {

  // User Route. Find all Users
  app.get("/api/users", function(req, res) {
    
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
