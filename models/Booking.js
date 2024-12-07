const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Booking = db.define('Booking', {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  trainId: { type: DataTypes.INTEGER, allowNull: false },
  seatsBooked: { type: DataTypes.INTEGER, allowNull: false },
});


Booking.associate = function(models) {
  Booking.belongsTo(models.User, { foreignKey: 'userId' });
  Booking.belongsTo(models.Train, { foreignKey: 'trainId' });
};

module.exports = Booking;
