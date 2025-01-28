'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Booking, { foreignKey: 'userId' });
    }
  }

  User.init(
    {
      username: { type: DataTypes.STRING, allowNull: false ,unique: true,},
      password: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.STRING, allowNull: false,defaultValue: 'user', },
    },
    { sequelize, modelName: 'User' }
  );

  return User;
};
