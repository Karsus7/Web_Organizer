// Require path
let path = require("path");
const request = require('request');
const api_helper = require('./api-helper')

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

        // api_helper.api_post('http://localhost:8080/api/bookmarks', {
        //     UserId: 1,
        //     url: 'youtube.com',
        //     category: 'tutorials',
        //     keyword: 'express',
        //     createdAt: '2020-08-07 22:30:22',
        //     updatedAt: '2020-08-07 22:30:22'
        // })

        //need to pass through ID
        // api_helper.api_delete('http://localhost:8080/api/bookmarks/1').then()

        api_helper.api_get('http://localhost:8080/api/bookmarks').then(response => {
            res.render('members', {
                bookmarks: response
            })
        }).catch(error => {
            res.send(error)
        })
    });

    //post - > send server data received from webpage.
    // app.post()

    
    // making this explicit because of link on signup page to login page
    app.get('/login', function(req, res){
        res.render('login');
    })

}