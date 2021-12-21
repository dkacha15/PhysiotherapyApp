const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { MONGODB_URL } = require("./Config/keys");

const app = express();
const PORT = 5000;

const auth = require("./routes/authPatientRoutes");

app.use(bodyParser.json());

app.use("/api/Physiotherapy", auth);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});
