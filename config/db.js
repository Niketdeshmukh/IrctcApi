require('dotenv').config(); // Ensure this is included to load environment variables

const { Sequelize } = require('sequelize');

// Use the environment variables from your .env file
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Username
  process.env.DB_PASSWORD, // Password
  {
    host: process.env.DB_HOST, // Host
    port: process.env.DB_PORT, // Port
    dialect: 'postgres',       // Database dialect
  }
);

module.exports = sequelize;
