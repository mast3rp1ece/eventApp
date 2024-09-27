const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Events = require("./Events");

const Participants = sequelize.define("Participants", {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  referal_source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  event_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Events,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
});

Events.hasMany(Participants, { foreignKey: "event_id" });
Participants.belongsTo(Events, { foreignKey: "event_id" });

module.exports = Participants;
