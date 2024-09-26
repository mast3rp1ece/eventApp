"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    function getRandomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }

    const events = [];
    for (let i = 0; i < 20; i++) {
      events.push({
        title: "Amazing Ivent 2024",
        description: "This is an amazing event!",
        event_date: getRandomDate(
          new Date("2024-09-30"),
          new Date("2025-05-31")
        ),
        organizer: "John Smith",
      });
    }

    await queryInterface.bulkInsert("Events", events, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Events", null, {});
  },
};
