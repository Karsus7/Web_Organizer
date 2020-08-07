const { Sequelize, DataTypes } = require ('sequelize');
const sequelize = new Sequelize('mysql::memory');

module.exports =  function(sequelize,DataTypes) {
    //* Bookmark Model -- NOTE: createdAt and updatedAt are automatically added to every sequelize Model
    const Bookmark = sequelize.define('Bookmark', {
        id: {
        type: DataTypes.UUID,
        defaultValue:Sequelize.UUIDV4,
        primaryKey: true  //*!sequelize does this automatically, but including it here to make PRIMARY KEY obvious
        },                
        url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNull: false,
        }
        },
        category: {
        type: DataTypes.STRING, 
        allowNull: false,
        defaultValue: Sequelize.WEBLINK, //*!not yet sure where this default is pulled from
        validate: {
            isNUll: false,
         } 
        },
        keyword: {
        type: DataTypes.STRING,
        allowNull: true,
        },
     });

     Bookmark.associate = function(models) {
        // We're saying that a Bookmark should belong to a User
        // A Bookmark can't be created without a User due to the foreign key constraint
        Bookmark.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    
      return Bookmark;
};