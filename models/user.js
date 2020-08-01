/**
 * TODO: require bcrypt to authenticate password
 * ? Should we do this now or wait? 
 */

 // User Model
module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        // User must have an email to use app
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // User Password
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
   /**
    * TODO: Validate password by comparing inputted password to password stored in database
    * 
    */

    
    // One User-to-Many Bookmarks Relationship
    User.associate = function(models) {
        User.hasMany(models.Bookmark, {
            onDelete: "cascade"
        });
    };

 return User;
};
