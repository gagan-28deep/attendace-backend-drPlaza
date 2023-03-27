const shiftModel = require("../models/shiftModel");

// Create A shift
async function createShift(req, res) {
  try {
    let data = req.body;
    let newShift = await shiftModel.create(data);
    res.status(201).json({
      message: "Shift created successfully",
      newShift,
    });
  } catch (err) {
    console.log("Error->", err);
    res.status(500).json({
      message: err.message,
    });
  }
}

// Get All Shifts
async function getAllShifts(req, res) {
  try {
    let shifts = await shiftModel.find();
    res.status(200).json({
      shifts,
    });
  } catch (err) {
    console.log("Error -> ", err);
    res.status(500).json({
      message: err.message,
    });
  }
}

// Get a Shift by ID
async function getById(req, res) {
  let id = req.params.id;
  try {
    let shift = await shiftModel.findById(id);
    res.status(200).json({
      shift,
    });
  } catch (err) {
    console.log("Error -> ", err);
    res.status(500).json({
      message: err.message,
    });
  }
}

// Update Shift
async function updateShift(req, res) {
  let id = req.params.id;
  let data = req.body;
  try {
    let user = await shiftModel.findById(id);
    let updatedUser = await shiftModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    res.status(200).json({
      updatedUser,
    });
  } catch (err) {
    console.log("Error -> ", err);
    res.status(500).json({
      message: err.message,
    });
  }
}

// Delete Shift
async function deleteShift(req, res) {
  let id = req.params.id;
  try {
    let deletedUser = await shiftModel.findByIdAndDelete(id);
    res.status(200).json({
      deletedUser,
    });
  } catch (err) {
    console.log("Error -> ", err);
    res.status(500).json({
      message: err.message,
    });
  }
}

module.exports = {
  getAllShifts,
  createShift,
  getById,
  updateShift,
  deleteShift,
};
