const express = require("express");
const Student = require('../models/Student');
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).json({ student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching students" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { gr_no, student_name, enroll } = req.body;
    const newStudent = new Student({ gr_no, student_name, enroll });
    await newStudent.save();
    res.status(201).json({ message: "Student created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating student" });
  }
});

module.exports = router;
