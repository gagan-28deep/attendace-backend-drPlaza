const mongoose = require("mongoose");

const schemaName = "userModel";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  number: {
    type: Number,
    required: [true, "number is required"],
  },
});

const userModel = mongoose.model(schemaName, userSchema, schemaName);

module.exports = userModel;
