const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  gr_no: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
