const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { MONGODB_URL } = require("./Config/keys");

const app = express();
const PORT = 5000;

const auth = require("./Routes/authRoutes");
const service = require("./Routes/serviceRoutes");
const product = require("./Routes/productRoutes");
const doctor = require("./Routes/doctorRoutes");
const appointment = require("./Routes/appointmentRoutes");

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

app.use("/api/Physiotherapy", auth);
app.use("/api/Physiotherapy", service);
app.use("/api/Physiotherapy", product);
app.use("/api/Physiotherapy", doctor);
app.use("/api/Physiotherapy", appointment);

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
