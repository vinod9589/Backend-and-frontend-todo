const mongoose = require("mongoose");

const TestingSchema = mongoose.Schema({
  fristname: String,
  lastname: String,
  email: String,
  department: String,

  salary: String,
});

module.exports = mongoose.model("Testing", TestingSchema);
