const { Router } = require("express");
const serviceCtrl = require("../Controllers/service");

const router = Router();

router.post("/createService", serviceCtrl.createService);
router.get("/getServices", serviceCtrl.getServices);
router.post("/getServiceById", serviceCtrl.getServiceById);
// router.post("/addDoctor", serviceCtrl.addDoctor);
// router.post("/removeDoctor", serviceCtrl.removeDoctor);

module.exports = router;
