import express, { json } from "express";
import { body, validationResult } from "express-validator";

const app = express();

app.use(json());

// Custom validator to check if the email is in the correct format
const isValidEmail = (value) => {
  const regex = /^[a-zA-Z0-9._%+-]+@marwadiuniversity\.ac\.in$/;
  return regex.test(value);
};

// Route for login validation
app.post("/login", [
  body("username")
    .custom((value) => isValidEmail(value))
    .withMessage("Username must be a valid institute email address"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Validation passed, handle login logic here
  // For example, check username and password against a database
  // If login is successful, return a success message or token
  // If login fails, return an error message
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
