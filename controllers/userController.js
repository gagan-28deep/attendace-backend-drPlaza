const userModel = require("../models/userModel");
async function signup(req, res) {
  try {
    let data = req.body;
    if (!data) {
      res.json({ message: "Please fill all the fields" });
    } else {
      let newUser = await userModel.create(data);
      res.json({
        user: newUser,
        message: "User Created",
      });
    }
  } catch (err) {
    console.log("Error", err);
    res.json({
      message: err.message,
    });
  }
}

async function getAllUsers(req, res) {
  try {
    let users = await userModel.find();
    res.json({
      users,
    });
  } catch (err) {
    console.log("Error", err);
    res.json({
      message: err.message,
    });
  }
}

async function getUserById(req, res) {
  let id = req.params.id;
  try {
    let user = await userModel.findById(id);
    res.json({
      user,
    });
  } catch (err) {
    console.log("Error", err);
    res.json({
      message: err.message,
    });
  }
}

async function updateUser(req, res) {
  let id = req.params.id;
  try {
    let data = req.body;
    let updatedUser = await userModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    res.json({
      message: "User Updated",
      updateUser,
    });
  } catch (err) {
    console.log("Error", err);
    res.json({
      message: err.message,
    });
  }
}

async function deleteUser(req, res) {
  let id = req.params.id;
  try {
    let delUser = await userModel.findByIdAndDelete(id);
    res.json({
      message: "User Deleted",
      delUser,
    });
  } catch (err) {
    console.log("Error", err);
    res.json({
      message: err.message,
    });
  }
}
module.exports = {
  getAllUsers,
  getUserById,
  signup,
  deleteUser,
  updateUser,
};
