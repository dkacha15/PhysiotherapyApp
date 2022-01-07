const Doctor = require("../Models/doctorSchema");

module.exports = {

  async getDoctors(req, res) {
    const doctors = await Doctor.find({}, {
      name:1,
    });
    return res.json(doctors);
  },

  async getDoctorById(req, res) {
    const { doctor_id } = req.body;
    await Doctor.findById(doctor_id).then((result) => {
      return res.json(result);
    }).catch((err) => {
      console.log(err);
    })
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
