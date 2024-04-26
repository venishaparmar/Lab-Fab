const express = require("express");
const router = express.Router();

const LabEntry = require("../models/LabEntry");

router.post("/check", async (req, res) => {
  const { grNumber } = req.body;

  try {
    const labEntry = await LabEntry.findOne({ grNumber, isActive: true });
    if (labEntry) {
      return res.json({
        exists: true,
        message:
          "Lab Entry with GR number " + grNumber + " exists and is active.",
      });
    } else {
      return res.json({
        exists: false,
        message:
          "Lab Entry with GR number " +
          grNumber +
          " does not exist or is inactive.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/add-entry", async (req, res) => {
  const { grNumber, entryTime, leaveTime, purpose, isActive, labCode } =
    req.body;

  try {
    const newLabEntry = new LabEntry({
      grNumber,
      entryTime,
      leaveTime,
      purpose,
      isActive,
      labCode,
    });

    await newLabEntry.save();
    res.status(201).json({
      message: "Lab entry created successfully!",
      labEntry: newLabEntry,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating lab entry" });
  }
});

router.put("/lab-leave", async (req, res) => {
  const { grNumber } = req.body;

  try {
    const updatedLabEntry = await LabEntry.findOneAndUpdate(
      { grNumber },
      { leaveTime: new Date().toISOString(), isActive: false },
      { new: true } // Return the updated document
    );

    res
      .status(200)
      .json({ message: "LabEntry updated successfully", updatedLabEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating LabEntry" });
  }
});

module.exports = router;
