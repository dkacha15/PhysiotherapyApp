const { Router } = require("express");
const serviceCtrl = require("../Controllers/service");

const router = Router();

router.post("/createService", serviceCtrl.createService);
router.post("/getServices",serviceCtrl.getServices);

module.exports = router;
