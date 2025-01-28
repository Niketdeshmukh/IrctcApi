'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.User, { foreignKey: 'userId' });
      Booking.belongsTo(models.Train, { foreignKey: 'trainId' });
    }
  }

  Booking.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      trainId: { type: DataTypes.INTEGER, allowNull: false },
      seatsBooked: { type: DataTypes.INTEGER, allowNull: false },
    },
    { sequelize, modelName: 'Booking' }
  );

  return Booking;
};
