const Appointment = require("../Models/appointmentSchema");

module.exports = {
    async addAppointment(req, res) {
        const { doctor_id, date, service_id } = req.body;

        const appointment = new Appointment({
            patient_id: req.user._id,
            doctor_id,
            date,
            service_id
        });

        await appointment.save().then((result) => {
            return res.json({ message: "Appointment booked successfully" });
        }).catch((err) => {
            return res.json({ error: "Failed to book appointment" });
        });
    },
};