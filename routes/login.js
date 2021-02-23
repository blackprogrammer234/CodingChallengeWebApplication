const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/Users");
var config = require('../config.json');

router.post(
    "/login",
    [
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
        const { email, password } = req.body;

        try {
            let user = await User.findOne({
                email
            });
            if (!user)
                return res.status(400).json({
                    message: config.FAILURE_RESPONSE400_EMAIL_FOR_LOGIN
                });
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
                return res.status(400).json({
                    message: config.FAILURE_RESPONSE400_PASSWORD_FOR_LOGIN
                });

            await user.save((err) => {
                if (err) {
                    console.log("Error: " + err);
                    res.status(500).json({
                        message: config.FAILURE_RESPONSE500_FOR_LOGIN,
                        success: false
                    });
                } else {
                    res.status(200).json({
                        message: config.SUCCESS_RESPONSE200_FOR_LOGIN,
                        status: 200,
                        success: true
                    });
                }
            });
        }
        catch (e) {
            console.error(e);
            res.status(500).json({
                message: config.FAILURE_RESPONSE_500
            })
        }
    }
);
module.exports = router;