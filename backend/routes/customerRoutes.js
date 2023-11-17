const express = require("express");
const { getAllCustomers, addCustomer, getSingleCustomer, deleteCustomer } = require("../controller/customerController");
const router = express.Router();



router.get("/", getAllCustomers)
router.get("/single_customer/:id", getSingleCustomer)
router.post("/", addCustomer)
router.delete("/delete_customer/:id", deleteCustomer)


module.exports = router