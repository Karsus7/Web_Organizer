const Sequelize = require('sequelize');
const db = require('../config/database');

// User Model
const User = db.define('user', {
    user_email: {
        type: Sequelize.STRING
    },
    user_password: {
        type: Sequelize.STRING
    }
})

// Export the Model
module.exports = User;