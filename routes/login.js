const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/Users")

router.post(
    "/login",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password. It" +
            "must be at least six characters long").isLength({
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
                    message: "User doesn't exist"
                });
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
                return res.status(400).json({
                    message: "Incorrect Password"
                });

            await user.save((err) => {
                if (err) {
                    console.log("Error: " + err);
                    res.status(500).json({
                        message: "There was problem with grabbing the information",
                        success: false
                    });
                } else {
                    console.log("User successfully authenticate");
                    res.status(200).json({
                        message: "User successfully authenticate",
                        status: 200,
                        success: true
                    });
                }
            });
        }
        catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            })
        }
    }
);
module.exports = router;