const express = require("express");
const cors = require("cors");
const eventsRouter = require("./routes/events");
const participantsRouter = require("./routes/participants");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:9000",
    methods: ["POST", "GET"],
  })
);

app.use("/", eventsRouter, participantsRouter);

app.listen(3001, () => {
  console.log("Server is running!");
});
