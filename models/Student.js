const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  gr_no: { type: String, required: true, unique: true },
  student_name: { type: String, required: true },
  enroll: { type: Number, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
