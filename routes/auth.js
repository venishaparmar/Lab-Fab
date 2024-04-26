const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const JWT_SECRET = "myJwtSecret";

router.post(
  "/signup",
  // Add validation middleware using express-validator
  [
    body("grNumber")
      .isLength({ min: 6, max: 6 })
      .withMessage("GR Number must be exactly 6 digits"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let success = false;
    const { grNumber } = req.body;
    try {
      let user = await User.findOne({ gr_no: grNumber });
      if (user) {
        return res
          .status(400)
          .json({ success, error: "User with this GR No already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        gr_no: req.body.grNumber,
        password: secPass,
      });

      const data = {
        user: { id: user.id },
      };

      const token = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({
        success,
        token: token,
        message: "User registered successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error);
    }
  }
);

router.post("/login", async (req, res) => {
  const { grNumber, password } = req.body;
  let success = false;

  try {
    const user = await User.findOne({ gr_no: grNumber });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid GR number" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password); // Compare hashed password

    if (isPasswordValid) {
      success = true;
      res.json({ success, currentUser: user });
    } else {
      res.status(401).json({ success: false, message: "Invalid password" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error, success: false, message: "Internal server error" });
  }
});

module.exports = router;
