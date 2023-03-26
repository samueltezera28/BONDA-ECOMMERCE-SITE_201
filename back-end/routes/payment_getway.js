const express = require("express");
const router = express.Router();

const { stripPay } = require("../controllers/paymet_getway");

router.post("/create-checkout-session", stripPay);

module.exports = router;
