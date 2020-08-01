/**
 * * weborgdb = Database Name
 */

 // Require models and db to interact
 let db = require("../models");

 module.exports = function(app) {
     app.get("/api/users", function(req, res) {
         // Find All Users 
         db.User.findAll({
             include: [db.Bookmark]
         }).then(function(dbUser) {
             res.json(dbUser)
         });
     });

     app.get("/api/users/:id", function(req, res) {
         // Find a single user
         db.User.findOne({
             where: {
                 id: req.params.id
             },
             include: [db.bookmark]
         }).then(function(dbUser) {
             res.json(dbUser);
         });
     });

     app.post("/api/users", function(req, res) {
         // Create a new user
         db.User.create(req.body).then(function(dbUser) {
             res.json(dbUser);
         });
     });

     app.delete("/api/users/:id", function(req, res) {
         // Delete a user
         db.User.destroy({
             where: {
                 id: req.params.id
             }
         }).then(function(dbUser) {
             res.json(dbUser);
         });
     });
 }
