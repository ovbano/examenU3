'use strict';

const { BOOKING_TABLE, BookingSchema } = require('../../models/models-examen/booking.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(BOOKING_TABLE, BookingSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(BOOKING_TABLE);
  }
};
