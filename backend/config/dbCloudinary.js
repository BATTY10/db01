const cloudinary = require('cloudinary').v2;
// import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dvirgdfry",
  api_key: "939743813844852",
  api_secret: "EM78dGbGOC1n5DW9-GolRxvkZSA",
});


module.exports = cloudinary;