const express = require("express");
const { getAllCustomers, addCustomer } = require("../controller/customerController");
const router = express.Router();



router.get("/", getAllCustomers)
router.post("/", addCustomer)


module.exports = router