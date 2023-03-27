const dailyModel = require("../models/dailyShiftModel");

// Get ALL Shifts
async function getAllDailyShifts(req, res) {
  try {
    let dailyShifts = await dailyModel.find();
    res.json({
      dailyShifts,
    });
  } catch (err) {
    console.log("Error -> ", err);
  }
}

// Create Daily Shift
async function createDailyShift(req, res) {
  try {
    let data = req.body;
    const isDataPresent = Object.keys(data).length > 0;
    if (isDataPresent) {
      let newDailyShift = await dailyModel.create(data);
      res.json({
        newDailyShift,
      });
    } else {
      res.status(404).json({
        message: "data is incomplete",
      });
    }
  } catch (err) {
    console.log("Error->", err);
  }
}

// Get Daily Shift by Id
async function getDailyShiftById(req, res) {
  let id = req.params.id;
  try {
    let dailyshit = await dailyModel.findById(id);
    res.json({
      dailyshit,
    });
  } catch (err) {
    console.log("error", err);
  }
}

// Update By Id
async function updateById(req, res) {
  let id = req.params.id;
  let data = req.body;
  try {
    // let user = await dailyModel.findById(id);
    let updatedUser = await dailyModel.findByIdAndUpdate(
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

// Delete By ID
async function deleteById(req, res) {
  let id = req.params.id;
  try {
    let deletedUser = await dailyModel.findByIdAndDelete(id);
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
  getAllDailyShifts,
  createDailyShift,
  getDailyShiftById,
  updateById,
  deleteById,
};
