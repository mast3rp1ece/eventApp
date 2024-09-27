const express = require("express");
const participantsRouter = express.Router();
const Participants = require("../models/Participants");

participantsRouter.post("/register/:id", async (req, res) => {
  const eventId = req.params.id;
  const data = req.body;
  //   console.log(data);
  //   console.log(eventId);

  try {
    const participant = await Participants.create({
      full_name: data.fullName,
      email: data.email,
      date_of_birth: data.date,
      referal_source: data.source,
      event_id: eventId,
    });
    return res.json(participant);
  } catch (err) {
    return res.json(err);
  }
});

module.exports = participantsRouter;
