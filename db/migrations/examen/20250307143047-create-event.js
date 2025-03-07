'use strict';
const { EVENT_TABLE, EventSchema } = require('../../models/models-examen/event.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(EVENT_TABLE, EventSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(EVENT_TABLE);
  }
};
