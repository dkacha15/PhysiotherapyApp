const { Router } = require("express");
const authPatientCtrl = require("../Controllers/authPatient");

const router = Router();

router.post("/patientSignup", authPatientCtrl.createPatient);
router.post("/patientLogin", authPatientCtrl.loginPatient);

module.exports = router;
