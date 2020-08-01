const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('weborgdb', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});


// Test the sequelize connection to weborgdb database
try {
    sequelize.authenticate();
    console.log('Connection Successful!');
} catch (error) {
    console.log('Cannot connect to database:', error);
}

// User Model
module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        username: DataTypes.STRING
    });
    return User;
    
}
