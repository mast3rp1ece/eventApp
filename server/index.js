const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http//:localhost:9000"],
    methods: ["POST", "GET"],
  })
);

app.listen(3001, () => {
  console.log("Server is running!");
});
