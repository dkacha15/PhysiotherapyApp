const { Router } = require("express");
const appointmentCtrl = require("../Controllers/appointment");

const router = Router();

router.post("/addAppointment", appointmentCtrl.addAppointment);

module.exports = router;
