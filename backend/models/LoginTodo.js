const mongoose = require("mongoose");

const LoginTodoSchema = mongoose.Schema({
  
  email: String,
  password: String,

});

module.exports = mongoose.model("LoginTodo", LoginTodoSchema);
