const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  fristname: String,
  lastname: String,
  email: String,
  department: String,
  salary: String,
});

module.exports = mongoose.model("Todo", TodoSchema);
