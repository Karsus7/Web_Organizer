// Require path
let path = require("path");

// Front-End Routes
module.exports = function(app) {

    // Index Route: Login page for users to login
    app.get('/', function(req, res){
        res.render('login');
    })

    // Signup Route: Sign Up Page for Users to create an account
    app.get('/signup', function(req, res){
        res.render('signup');
    })

    // Users Route: Page a signed in user will view
    app.get('/members', function(req, res){
        res.render('members');
    })
    
    // making this explicit because of link on signup page to login page
    app.get('/login', function(req, res){
        res.render('login');
    })

}