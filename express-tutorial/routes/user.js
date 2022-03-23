const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", function(req, res) {
    res.end("Done");
});

router.get("/useradd", function(req, res) {
    res.render("user/useradd");
});

router.post("/useradd", function(req, res) {
    const user = new User();
    user.name = req.body.user_name;
    user.email = req.body.user_email;
    user.password = req.body.password;
    user.save(function(err, rtn) {
        if (err) throw err;
        res.redirect("/user/userlist")
    })
});

router.get("/userlist", function(req, res) {
    User.find(function(err, rtn) {
        if (err) throw err;
        res.render("user/userlist", {users : rtn});
    })
});

router.get("/userdetail/:id", function(req, res) {
    User.findById(req.params.id, function(err, rtn) {
        if (err) throw err;
        res.render("user/userdetail", {user : rtn});
    })
});

router.get("/userupdate/:id", function(req, res) {
    User.findById(req.params.id, function(err, rtn) {
        if (err) throw err;
        res.render("user/userupdate", {user : rtn});
    })
});

router.post("/userupdate", function(req, res) {
    const update = {
        name: req.body.user_name,
        email:req.body.user_email,
        password: req.body.password
    };
    User.findByIdAndUpdate(req.body.id, {$set: update}, function(err, rtn) {
        if (err) throw err;
        res.redirect("/user/userlist")
    })
});

router.get("/userdelete/:id", function(req, res) {
    User.findByIdAndDelete(req.params.id, function(err, rtn) {
        if (err) throw err;
        res.redirect("/user/userlist");
    })
});

module.exports = router;
