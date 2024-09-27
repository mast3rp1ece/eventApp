const express = require("express");
const eventsRouter = express.Router();
const Events = require("../models/Events");
const Participants = require("../models/Participants");

eventsRouter.get("/events", async (req, res) => {
  try {
    const events = await Events.findAll();
    return res.json(events);
  } catch (err) {
    return res.json(err);
  }
});

eventsRouter.get("/events/:id", async (req, res) => {
  const event_id = req.params.id;
  console.log(event_id);

  try {
    const event = await Events.findByPk(event_id, {
      include: [{ model: Participants }],
    });
    return res.json(event);
  } catch (err) {
    return res.json(err);
  }
});

module.exports = eventsRouter;
