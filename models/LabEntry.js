const mongoose = require("mongoose");

const LabEntrySchema = new mongoose.Schema({
  grNumber: {
    type: String,
    required: true,
  },
  entryTime: {
    type: Date,
    default: Date.now,
  },
  leaveTime: {
    type: Date,
    default: Date.now,
  },
  purpose: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  labCode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("LabEntry", LabEntrySchema);
