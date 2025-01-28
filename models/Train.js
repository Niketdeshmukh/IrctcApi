'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Train extends Model {
    static associate(models) {
      Train.hasMany(models.Booking, { foreignKey: 'trainId' });
    }
  }

  Train.init(
    {
      trainName: { type: DataTypes.STRING, allowNull: false },
      source: { type: DataTypes.STRING, allowNull: false },
      destination: { type: DataTypes.STRING, allowNull: false },
      totalSeats: { type: DataTypes.INTEGER, allowNull: false },
      availableSeats: { type: DataTypes.INTEGER, allowNull: false },
    },
    { sequelize, modelName: 'Train' }
  );

  return Train;
};
