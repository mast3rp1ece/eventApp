const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Events = sequelize.define("Events", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  event_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  organizer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Events;
