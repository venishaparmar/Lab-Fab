// Import mongoose
const mongoose = require("mongoose");

// Define the schema for the component issue request
const componentIssueSchema = new mongoose.Schema({
  studentToken: {
    type: String,
    required: true,
  },
  componentName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  issueDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});

// Create a model for the component issue request using the schema
const ComponentIssue = mongoose.model("ComponentIssue", componentIssueSchema);

// Export the model
module.exports = ComponentIssue;
