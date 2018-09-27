var express = require('express');
var JWTChecks = require('../JWTChecks');
var route = express.Router();
var User = require('../models/user.model');

route.get('/user', JWTChecks, (req, res, next) => {
    console.log("Inside Profile routing , The main data is ", req.decoded)
    User.findOne({ _id: req.decoded.user._id }, (err, user) => {
        if (err) {
            res.json({
                error: err
            })
        }
        else {

            res.json({
                success: true,
                message: "successfull",
                user: user
            })
        }
    })
})


module.exports = route;