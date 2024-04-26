const mongoose = require("mongoose");
const { Schema } = mongoose;

const facultySchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Faculty = mongoose.model("Faculty", facultySchema);

module.exports = Faculty;
