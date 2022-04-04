const moment = require('moment');
const nodemailer = require('nodemailer');
const Appointment = require("../Models/appointmentSchema");
const Service = require("../models/serviceSchema");
const Doctor = require("../Models/doctorSchema");
const { EMAIL, PASSWORD } = require("../config/keys");
const hbs = require("nodemailer-express-handlebars");
const path = require('path');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: PASSWORD
  }
});

const handlebarsOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve('./Views'),
    defaultLayout: false
  },
  viewPath: path.resolve("./Views"),
  extName: ".handlebars"
}

transporter.use('compile', hbs(handlebarsOptions));

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

            Service.findById(service_id).then((service) => {
                Doctor.findById(doctor_id).then((doctor) => {
                    var mailOption = {
                        from: '"Bathani Physiotherapy" <dhruv.ddit@gmail.com>',
                        to: req.user.email,
                        subject: "Appointment confirmation mail",
                        template: 'appointmentConfirmation',
                        context: {
                            date: moment(date).format('DD/MM/YYYY'),
                            time: moment(date).format('hh:mm A'),
                            service: service.name,
                            doctor: doctor.name
                        }
                    };

                    transporter.sendMail(mailOption);
                })
            });

            return res.json({ message: "Appointment booked successfully" });
        }).catch((err) => {
            return res.json({ error: "Failed to book appointment" });
        });
    },
};