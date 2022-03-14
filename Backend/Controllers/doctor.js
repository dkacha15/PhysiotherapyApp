const Doctor = require("../Models/doctorSchema");
const Appointment = require("../Models/appointmentSchema");

module.exports = {

  async getDoctors(req, res) {
    const doctors = await Doctor.find({}, {
      name:1,
    }).populate("services.service_id", "name");
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

  async addService(req, res) {
    const { service_id, doctor_id } = req.body;

    await Doctor.findByIdAndUpdate(
      doctor_id,
      {
        $push: {
          services: {
            service_id:service_id
          },
        },
      },
      {
        new:true,
      }
    ).exec((err, result) => {
      if (err) {
        return res.json({ error: "Failed to add service" });
      } else {
        return res.json({ result, message: "Service added successfully" });
      }
    })
  }
};
