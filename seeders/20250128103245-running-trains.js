'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trains', [
      {
        trainName: 'Rajdhani Express',
        source: 'New Delhi',
        destination: 'Mumbai',
        totalSeats: 120,
        availableSeats: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainName: 'Karnataka Express',
        source: 'Bangalore',
        destination: 'Mumbai',
        totalSeats: 150,
        availableSeats: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trainName: 'Vande Bharat Express',
        source: 'New Delhi',
        destination: 'Varanasi',
        totalSeats: 180,
        availableSeats: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trains', null, {});
  }
};
