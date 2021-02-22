const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/Users")

router.post(
    "/signup", [
    check("firstName", "Please enter a first name").not().isEmpty(),
    check("lastName", "Please enter a last name").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
        min: 6
    })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        try {
            let user = await User.findOne({
                email
            });

            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }
            user = new User({
                firstName,
                lastName,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save((err) => {
                if (err) {
                    console.log("Error: " + err);
                    res.status(500).json({
                        message: "There was problem with saving the information",
                        success: false
                    });
                } else {
                    console.log("User successfully register");
                    res.status(200).json({
                        message: "User successfully register",
                        success: true
                    });
                }
            });
        
        }
        catch(e){
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            })
        }
    }
);
module.exports = router;