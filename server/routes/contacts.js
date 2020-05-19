var express = require('express');
var router = express.Router();
const Users = require('../models/user');
var path = require('path');


Users.find().populate("_id").then(users => {
    console.log("Usernames of all the users: ")
    users.forEach(user => {
        console.log(user.username)
    })
})

router.get("/", (req, res) =>{
    Users.find().populate("_id").then(users => res.send(users));
})


module.exports = router;