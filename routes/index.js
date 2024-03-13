var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json({ limit: "100mb" }));
router.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

router.post("/receive-image", (req, res) => {
  try {
    const image = req.body.image;
    const question = req.body.question; // Extract question from request body
    const answerkey = req.body.answerkey; // Extract answer key from request body

    // Log the received data
    console.log("Image:", image);
    console.log("Question:", question);
    console.log("Answer Key:", answerkey);

    console.log("Data received and logged successfully");
    res.send(image);
  } catch (error) {
    console.error("Error receiving data in server 2 :", error.message);
    res.status(500).send("Error receiving data in server 2");
  }
});

module.exports = router;
