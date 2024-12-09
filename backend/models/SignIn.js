const mongoose = require("mongoose");

const SignInSchema = mongoose.Schema({
  fristname: String,
  lastname: String,
  email: String,
  password: String,

});

module.exports = mongoose.model("SignIn", SignInSchema);
