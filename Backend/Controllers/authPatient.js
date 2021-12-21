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
        if(patient){
            return res.json({ error: "Email already used" });
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
              module.exports.loginPatient(req, res);
            });
        }).catch((err) => {
          console.log(err);
        })
    }).catch((err) => {
      console.log(err);
    })
    
  },
  
  async loginPatient(req,res){
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({error:"Enter the required fields"});
    }

    await Patient.findOne({
      email:email
    }).then((patient) => {
      if (!patient) {
        return res.json({ error: "Email or Password is incorrect.Try again." });
      } 
      
      bcrypt.compare(password, patient.password).then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign({ _id: patient._id }, JWT_SECRET, {
            expiresIn: "24h"
          });

          res.json({
            message: "Login Successful",
            token
          });

        } else {
          return res.json({ error: "Email or Password is incorrect.Try again." });
        }
      }).catch((err) => {
        console.log(err);
      })

    }).catch((err) => {
      console.log(err);
    })
  }
};
