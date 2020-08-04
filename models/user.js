module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User",{
      email: DataTypes.STRING,
      password: DataTypes.STRING

    });
    return User;
  };

  

