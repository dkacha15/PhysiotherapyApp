const { Router } = require("express");
const productCtrl = require("../Controllers/product");

const router = Router();

router.post("/createProduct", productCtrl.createProduct);
router.get("/getProducts", productCtrl.getAllProducts);
router.post("/getProductById", productCtrl.getProductById);

module.exports = router;
