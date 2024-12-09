const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: String,
  discription: String,

});

module.exports = mongoose.model("Todo", TodoSchema);
