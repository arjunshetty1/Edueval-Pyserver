var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

// Set the maximum request body size to 10MB
router.use(bodyParser.json({ limit: "100mb" }));
router.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
const UPLOAD_DIR = path.join(__dirname, "uploads"); // Define the upload directory

router.post("http://localhost:3002/receive-image", (req, res) => {
  try {
    console.log(req.body.image);
    const imageData = Buffer.from(req.body.image); // Extract image data from request body
    const imageName = req.body.imageName; // Define the image name
    const imagePath = path.join(UPLOAD_DIR, imageName); // Construct the full image path

    fs.writeFileSync(imagePath, imageData); // Save the received image to the uploads directory
    console.log("Image received and saved successfully");
    res.send("Image received and saved");
  } catch (error) {
    console.error("Error receiving image:", error.message);
    res.status(500).send("Error receiving image");
  }
});

module.exports = router;
