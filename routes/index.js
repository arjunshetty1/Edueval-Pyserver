const express = require("express");
const router = express.Router();
const multer = require("multer");

// Set up multer storage options
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 },
}); // Limit file size to 100 MB

router.post("/receive-image", upload.single("image"), (req, res) => {
  try {
    const imageData = req.file.buffer; // Extract image buffer from request file
    const imageName = req.body.imageName; // Extract image name from request body
    const question = req.body.question; // Extract question from request body
    const answerkey = req.body.answerkey; // Extract answer key from request body

    // Log the received data
    console.log("Image:", imageName);
    console.log("Question:", question);
    console.log("Answer Key:", answerkey);
    console.log("Image Buffer:", imageData);

    console.log("Data received and logged successfully");
    res.send("Data received and logged");
  } catch (error) {
    console.error("Error receiving data:", error.message);
    res.status(500).send("Error receiving data");
  }
});

module.exports = router;
