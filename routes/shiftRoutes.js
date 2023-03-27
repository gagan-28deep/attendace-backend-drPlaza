const express = require("express");
const {
  createShift,
  getAllShifts,
  getById,
  updateShift,
  deleteShift,
} = require("../controllers/shiftController");

const shiftRouter = express.Router();

shiftRouter.route("/").get(getAllShifts).post(createShift);

shiftRouter.route("/:id").get(getById).patch(updateShift).delete(deleteShift);

module.exports = shiftRouter;
