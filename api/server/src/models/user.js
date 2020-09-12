"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  User.associate = function ({ Book }) {
    User.hasMany(Book, {
      foreignKey: "userId",
      as: "books",
    });
  };
  return User;
};
