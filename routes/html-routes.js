// Require path
let path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Front-End Routes
module.exports = function(app) {

    // Index Route: Login page for users to login
    app.get('/', function(req, res){
        if (req.user){
        res.redirect('/members');
    };
        res.render('signup');
    })

    // Signup Route: Sign Up Page for Users to create an account
    app.get('/login', function(req, res){
       if (req.user){
        res.redirect('/members');
    };
        res.render('login');

    })

    // Users Route: Page a signed in user will view
    app.get('/members',isAuthenticated, function(req, res){
        res.render('members');

    })
    
    // making this explicit because of link on signup page to login page
    app.get('/signup', function(req, res){
        res.render('signup');
    })

}