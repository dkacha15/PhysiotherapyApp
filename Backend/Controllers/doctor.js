const Doctor = require("../Models/doctorSchema");

module.exports = {

  async getDoctorById(req, res) {
    const { doctor_id } = req.body;
    const doctor = await Doctor.findById(doctor_id);
    
    return res.json(doctor);
  },

  async addAppointment(req, res) {
    const { doctor_id, appointmentDate } = req.body;
    
    await Doctor.findByIdAndUpdate(
      doctor_id,
      {
        $push: {
          appointments:appointmentDate
        }
      },
      {
        new: true
      }
    ).exec((err, result) => {
      if (err) {
        return res.json({ error: "Failed to book appointment" });
      } else {
        return res.json({ message: "Appointment booked successfully" });
      }
    })
  }
};
