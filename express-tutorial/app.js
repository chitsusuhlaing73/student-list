const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
// const User = require("./models/user");
const userRouter = require("./routes/user");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
mongoose.connect("mongodb://127.0.0.1/express-tutorialdb");
const db = mongoose.connection;
db.on(
    "error",
    console.error.bind("MongoDB connection error at Express Tutorial")
);

app.use("/user", userRouter);
app.get("/", function(req, res) {
    res.render("index", {title: "Express Tutorial"});
});

app.listen(9090, function() {
    console.log("Server is running.")
});
