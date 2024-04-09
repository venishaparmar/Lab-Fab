const express = require("express");
const { body, validationResult } = require("express-validator");
const ComponentIssue = require("../models/ComponentIssue");

const router = express.Router();

// POST endpoint to add component issue data
router.post(
  "/component-issue",
  [
    // Validate request body
    body("componentName").notEmpty().withMessage("Component Name is required"),
    body("quantity")
      .isNumeric()
      .withMessage("Quantity must be a numeric value"),
    body("issueDate").isDate().withMessage("Invalid Issue Date"),
    body("returnDate").isDate().withMessage("Invalid Return Date"),
    body("purpose").notEmpty().withMessage("Purpose is required"),
    body("studentToken").notEmpty().withMessage("Student Token is required"),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure request body
    const {
      componentName,
      quantity,
      issueDate,
      returnDate,
      purpose,
      studentToken,
    } = req.body;

    try {
      // Create new component issue instance
      const componentIssue = new ComponentIssue({
        componentName,
        quantity,
        issueDate,
        returnDate,
        purpose,
        studentToken, // Include student token in the document
      });

      // Save component issue data to the database
      await componentIssue.save();

      // Send success response
      res.status(201).json({
        success: true,
        message: "Component issue data added successfully",
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

// GET endpoint to fetch component issue requests by student token
router.get("/component-issues/:studentToken", async (req, res) => {
  const { studentToken } = req.params;

  try {
    // Find all component issue requests for the provided student token
    const componentIssues = await ComponentIssue.find({ studentToken });

    if (!componentIssues) {
      return res
        .status(404)
        .json({
          message: "No component issues found for the provided student token",
        });
    }

    // Send success response with the component issue requests
    res.status(200).json({ success: true, componentIssues });
  } catch (error) {
    console.error(error);
    // Send error response
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
