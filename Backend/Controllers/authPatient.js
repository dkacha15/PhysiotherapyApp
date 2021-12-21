const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Patient = require("../models/patientSchema");
const { JWT_SECRET } = require("../config/keys");

module.exports = {
  async createPatient(req, res) {
    const { name, mobile, email, password, address, dob } = req.body;

    if (!name || !mobile || !email || !password || !dob) {
      return res.json({ error: "Enter the required fields" });
    }
    await Patient.findOne({
      email: email,
    }).then((patient) => {
      if (patient) {
        return res.json({ error: "email already used" });
      }
      bcrypt.hash(password, 6).then((hasedPassword) => {
        const patient = new Patient({
          name,
          mobile,
          email,
          password: hasedPassword,
          address,
          dob,
        });
        patient.save().then(() => {
          // const token = jwt.sign({ _id: patient._id }, JWT_SECRET, {
          //   expiresIn: "24h",
          // });
          return res.json({ patient: patient }); //comment this and call login function here
        });
      });
    });
  },
};
