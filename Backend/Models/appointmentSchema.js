const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patient_id: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  date: { type: Date },
  service_id: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
