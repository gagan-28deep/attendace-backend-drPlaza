const express = require("express");

const userRouter = express.Router();

const {
  signup,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
} = require("../controllers/userController");

userRouter.route("/").get(getAllUsers).post(signup);

userRouter.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
