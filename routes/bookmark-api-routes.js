const db = require('../models');

module.exports = function(app) {
//* GET route for getting all of the posts
    app.get('/api/bookmarks', function(req, res) {
        let query = {};
        if (req.query.user_id) {
        query.UserId = req.query.user_id;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.User
        db.Bookmark.findAll({
        where: query,
        include: [db.User]
        }).then(function(dbBookmark) {
        res.json(dbBookmark);
        });
    });

    //* Get route for retrieving a single post
    app.get('/api/bookmarks/:id', function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.User
        db.Bookmark.findOne({
        where: {
            id: req.params.id
        },
        include: [db.User]
        }).then(function(dbBookmark) {
        res.json(dbBookmark);
        });
    });  

    //* POST route for saving a new bookmark -- SAVE TO DATABASE
    app.post('/api/bookmarks', function(req, res) {
        console.log(req.body);
        db.Bookmark.create(req.body).then(function(dbBookmark) {
        res.json(dbBookmark);
        });
    });
    
    //**DELETE ROUTE
    app.delete('/api/bookmarks/:id', function(req, res) {
      db.Bookmark.destroy({
          where: {
              id:req.params.id
          }
      }).then (function(dbBookmark) {
          res.json(dbBookmark);
      });
     });

     //**PUT update Route
     app.put('/api/bookmarks', function(req, res) {
        db.Bookmarks.update(
            req.body,
        {
            where: {
                id: req.body.id
            }
        }).then (function(dbBookmark) {
            res.json(dbBookmark);
        });
       });
      };