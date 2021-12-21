const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String },
  mobile: { type: Number },
  email: { type: String },
  password: { type: String },
  address: { type: String },
  DOB: { type: Date },
});

module.exports = mongoose.model("Patient", patientSchema);
