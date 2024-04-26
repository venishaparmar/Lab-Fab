const express = require("express");
const { body, validationResult } = require("express-validator");
const Faculty = require("../models/Faculty");

const router = express.Router();

// POST endpoint to add faculty data
router.post(
    "/",
    [
        // Validate request body
        body("email").isEmail().withMessage("Invalid Email"),
        body("password").notEmpty().withMessage("Password is required"),
    ],
    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Destructure request body
        const { email, password } = req.body;

        try {
            // Create new faculty instance
            const faculty = new Faculty({ email, password });

            // Save faculty data to the database
            await faculty.save();

            // Send success response
            res.status(201).json({
                success: true,
                message: "Faculty data added successfully",
            });
        } catch (error) {
            console.error(error);
            // Send error response
            res
                .status(500)
                .json({ success: false, message: "Internal Server Error" });
        }
    }
);

router.post("/login", async (req, res) => {
    const { email } = req.body;
    const { password } = req.body;

    try {
        // Find the faculty by email
        const faculty = await Faculty.findOne({ email });

        if (!faculty) {
            return res.status(404).json({
                message: "Faculty not found",
            });
        }

        // Update the password
        faculty.password = password;
        await faculty.save();

        // Send success response
        res.status(200).json({ success: true, faculty });
    } catch (error) {
        console.error(error);
        // Send error response
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});


module.exports = router;