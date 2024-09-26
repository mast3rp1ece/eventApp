"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Events", [
      {
        title: "Test Ivent 2024",
        description: "This is a testing event",
        event_date: new Date("2024-11-11"),
        organizer: "Me=)",
      },
      {
        title: "Another Test Ivent 2024",
        description: "This is a testing event",
        event_date: new Date("2024-11-16"),
        organizer: "It's me)",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Events", null, {});
  },
};
