var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
// app.use(cors({ origin: "https://edu-eval.vercel.app" })); //custom added
app.use(cors()); //custom added
app.use(bodyParser.json()); //custom added
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.all("*", (req, res) => {
  res.end("SERVER 2 IS ON");
});

module.exports = app;
