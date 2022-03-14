const { Router } = require("express");
const doctorCtrl = require("../Controllers/doctor");

const router = Router();

router.post("/getDoctor", doctorCtrl.getDoctorById);
router.get("/getDoctors", doctorCtrl.getDoctors);
router.post("/addService", doctorCtrl.addService);

module.exports = router;
