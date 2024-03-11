var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json({ limit: "100mb" }));
router.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

router.post("/receive-image", (req, res) => {
  try {
    const imageData = req.body.image; // Extract image buffer from request body
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
