const { Router } = require("express");
const authPatientCtrl = require("../Controllers/authPatient");

const router = Router();

router.post("/patientSignup", authPatientCtrl.createPatient);

module.exports = router;
