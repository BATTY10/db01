const express = require('express');
const { client } = require("../config/dbConnect");
const { getAllData, getSingleData, addDataRow, deleteRow } = require('../controller/productController');
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary")
const cloudinary = require("../config/dbCloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params :{
        folder: "uploads",
    }
})

const upload = multer({ storage: storage});

router.get("/", getAllData)
router.get("/:id", getSingleData)
router.post("/", upload.single("image"), addDataRow)
router.delete("/delete/:id", deleteRow)

module.exports = router;