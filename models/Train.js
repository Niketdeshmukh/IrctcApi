const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Train = db.define('Train', {
  trainName: { type: DataTypes.STRING, allowNull: false },
  source: { type: DataTypes.STRING, allowNull: false },
  destination: { type: DataTypes.STRING, allowNull: false },
  totalSeats: { type: DataTypes.INTEGER, allowNull: false },
  availableSeats: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Train;
