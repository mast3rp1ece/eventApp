"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    function getRandomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }

    const participants = [];

    for (let i = 0; i < 20; i++) {
      participants.push({
        full_name: "Harry Potter",
        email: "harry@potter.com",
        date_of_birth: getRandomDate(
          new Date("2024-09-30"),
          new Date("2025-05-31")
        ),
        referal_source: "friends",
        event_id: 1,
      });
    }

    await queryInterface.bulkInsert("Participants", participants, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Participants", null, {});
  },
};
