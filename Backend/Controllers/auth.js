const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require('nodemailer');
const Patient = require("../models/patientSchema");
const Doctor = require("../Models/doctorSchema");
const { JWT_SECRET, EMAIL, PASSWORD } = require("../config/keys");
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
  async createPatient(req, res) {
    const { name, mobile, email, password, address, dob } = req.body;

    if (!name || !mobile || !email || !password || !dob) {
      return res.json({ error: "Enter the required fields" });
    }
    await Patient.findOne({
      email: email,
    })
      .then((patient) => {
        if (patient) {
          return res.json({ error: "Email already used. Try again." });
        }
        bcrypt
          .hash(password, 6)
          .then((hasedPassword) => {
            const patient = new Patient({
              name,
              mobile,
              email,
              password: hasedPassword,
              address,
              dob,
            });
            patient.save().then(() => {
              module.exports.loginPatient(req, res);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  async createDoctor(req, res) {
    const { name, mobile, email, password, schedule } = req.body;

    if (!name || !mobile || !email || !password || !schedule) {
      return res.json({ error: "Enter the required fields" });
    }
    await Doctor.findOne({
      email: email,
    })
      .then((doc) => {
        if (doc) {
          return res.json({ error: "Email already used" });
        }
        bcrypt
          .hash(password, 6)
          .then((hasedPassword) => {
            const doctor = new Doctor({
              name,
              mobile,
              email,
              password: hasedPassword,
              schedule,
            });
            doctor.save().then(() => {
              module.exports.loginDoctor(req, res);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  async loginPatient(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ error: "Enter the required fields" });
    }

    await Patient.findOne({
      email: email,
    })
      .then((patient) => {
        if (!patient) {
          return res.json({
            error: "Email or Password is incorrect.Try again.",
          });
        }

        bcrypt
          .compare(password, patient.password)
          .then((doMatch) => {
            if (doMatch) {

              const token = jwt.sign({ _id: patient._id }, JWT_SECRET, {
                expiresIn: "24h",
              });

              res.cookie("access_token", "bearer " + token, {
                maxAge: 24 * 60 * 60 * 1000,
              });

              res.json({
                message: "Login Successful",
                token,
              });
            } else {
              return res.json({
                error: "Email or Password is incorrect.Try again.",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  async loginDoctor(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ error: "Enter the required fields" });
    }

    await Doctor.findOne({
      email: email,
    })
      .then((doc) => {
        if (!doc) {
          return res.json({
            error: "Email or Password is incorrect.Try again.",
          });
        }

        bcrypt
          .compare(password, doc.password)
          .then((doMatch) => {
            if (doMatch) {
              const token = jwt.sign({ _id: doc._id }, JWT_SECRET, {
                expiresIn: "24h",
              });

              res.json({
                message: "Login Successful",
                token,
              });
            } else {
              return res.json({
                error: "Email or Password is incorrect.Try again.",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  async forgetPassword(req, res) {
    const { email } = req.body;

    crypto.randomBytes(32, (err, buffer) => {
      if (err) {
        console.log(err);
      }

      const token = buffer.toString("hex");
      Patient.findOne({
        email:email
      }).then((patient) => {
        if (!patient) {
          return res.json({ error: "User not found." });
        } else {
          patient.resetPasswordToken = token;
          patient.expirePasswordToken = Date.now() + 3600000;
          patient.save().then((result) => {
            const url = "http://localhost:3000/resetPassword/" + token;

            var mailOption = {
              from: '"Bathani Physiotherapy" <dhruv.ddit@gmail.com>',
              to: email,
              subject: "Password reset instructions",
              template: 'forgotPassword',
              context: {
                link: url
              }
            };

            transporter.sendMail(mailOption, function (err, data) {
              if (err) {
                return res.json({error:"Error in sending mail. Please try again later."});
              } else {
                res.json({
                  message: "Reset Password email sent successfully.",
                });
              }
            });
          })
        }
      })
    })
  },

  async changePass(req, res) {
    const { token, password } = req.body;

    bcrypt.hash(password, 12).then((hashedPassword) => {
      Patient.findOneAndUpdate(
        {
          resetPasswordToken: token,
          expirePasswordToken: { $gt: Date.now() },
        },
        {
          password: hashedPassword,
          resetPasswordToken: undefined,
          expirePasswordToken: undefined,
        },
        {
          new: true,
        }
      ).exec((err, founduser) => {
        if (!founduser) {
          return res.json({ error: "Session expired!" });
        } else {
          return res.json({ message: "Password reset successfully." });
        }
      });
    });
  }
};
