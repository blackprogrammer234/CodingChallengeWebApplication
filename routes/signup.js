const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/Users");
var config = require('../config.json')

router.post(
    "/signup", [
    check("firstName", config.FIRSTNAME_ERROR_MESSAGE_FOR_DB).not().isEmpty(),
    check("lastName", config.LASTNAME_ERROR_MESSAGE_FOR_DB).not().isEmpty(),
    check("email", config.EMAIL_ERROR_MESSAGE_FOR_DB).isEmail(),
    check("password", config.PASSWORD_ERROR_MESSAGE_FOR_DB).isLength({
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
                    msg: config.FAILURE_RESPONSE400_FOR_REGISTRATION
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
                        message: config.FAILURE_RESPONSE500_FOR_REGISTRATION,
                        success: false
                    });
                } else {
                    res.status(200).json({
                        message: config.Success_Message_For_Registration,
                        success: true
                    });
                }
            });
        
        }
        catch(e){
            console.error(e);
            res.status(500).json({
                message: config.FAILURE_RESPONSE_500
            })
        }
    }
);
module.exports = router;