const express = require("express");

const {
  createDailyShift,
  getAllDailyShifts,
  getDailyShiftById,
  updateById,
  deleteById,
} = require("../controllers/dailyShiftController");

const dailyShiftRouter = express.Router();

dailyShiftRouter.route("/").get(getAllDailyShifts).post(createDailyShift);
dailyShiftRouter
  .route("/:id")
  .get(getDailyShiftById)
  .patch(updateById)
  .delete(deleteById);

module.exports = dailyShiftRouter;
