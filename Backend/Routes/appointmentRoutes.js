const { Router } = require("express");
const appointmentCtrl = require("../Controllers/appointment");
const requireLogin = require("../Middleware/checkToken");

const router = Router();

router.post("/addAppointment", requireLogin, appointmentCtrl.addAppointment);

module.exports = router;
