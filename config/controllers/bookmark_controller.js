const express = require('express');
const bookmark = require('../models/bookmark.js');
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  bookmark.all(function(data) {
    const pugObject = {
      bookmark: data
    };
    console.log(pugObject);
    res.render("index", pugObject);
  });
});