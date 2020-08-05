// Require bcrypt for user passwords
let bcrypt = require("bcryptjs");

// User Model
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User",{
      // Must have an email to be a valid user
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      // Must have a password to be a valid user
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });

    // Password Authentication: Does the user input password equal the stored password in the user database?
    User.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };

    // Hash Password before a user is created
    User.addHook("beforeCreate", function(user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });


    // Each User associates with a bookmark/bookmarks
    User.associate = function(models) {
      // When a User is deleted, any associated bookmarks are also deleted
      User.hasMany(models.Bookmark, {
        onDelete: "cascade"
      });
    };

    return User;
};

  

