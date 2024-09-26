const express = require("express");
const eventsRouter = express.Router();
const Events = require("../models/Events");

eventsRouter.get("/events", async (req, res) => {
  try {
    const events = await Events.findAll();
    return res.json(events);
  } catch (err) {
    return res.json(err);
  }
});

module.exports = eventsRouter;
