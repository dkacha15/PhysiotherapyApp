const { Router } = require("express");
const authCtrl = require("../Controllers/auth");

const router = Router();

router.post("/patientSignup", authCtrl.createPatient);
router.post("/patientLogin", authCtrl.loginPatient);
router.post("/doctorSignup", authCtrl.createDoctor);
router.post("/doctorLogin",authCtrl.loginDoctor);
// router.post("/getAllDoctors",doctorCtrl.getDoctor);

module.exports = router;
