const Doctor = require("../Models/doctorSchema");
const Appointment = require("../Models/appointmentSchema");

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

      Appointment.find({
        doctor_id
      }).then((appointment) => {
        return res.json({result,appointment})
      })
      
    }).catch((err) => {
      console.log(err);
    })
  },
};
