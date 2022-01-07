const { Router } = require("express");
const doctorCtrl = require("../Controllers/doctor");

const router = Router();

router.post("/getDoctor", doctorCtrl.getDoctorById);
router.post("/addAppointment", doctorCtrl.addAppointment);
router.get("/getDoctors", doctorCtrl.getDoctors);

module.exports = router;
