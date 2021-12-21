const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: { type: String },
  information: { type: String },
  doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
});

module.exports = mongoose.model("Service", serviceSchema);
