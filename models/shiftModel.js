const mongoose = require("mongoose");
const schemaName = "shiftSchema";


const shiftSchema = mongoose.Schema({
  name: { type: String, default: "Default" },
  weekend: { type: Array, default: [] },
  time: { type: Array, default: [] },
  lateIn: { type: Number, default: 0 },
  earlyOut: { type: Number, default: 0 },
  halfDayHour: { type: Number }, // Half Day
  fullDayHour: { type: Number }, // Full Day
  offset: { type: Number }, // Timezone offset
  assignedEmployee: { type: Array, default: [] },
});

const shiftModel = mongoose.model(schemaName, shiftSchema, schemaName);

module.exports = shiftModel;
