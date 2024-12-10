const mongoose = require("mongoose");

const TaskTodoSchema = mongoose.Schema({
  title: String,
  discription: String,
  status: {
    type: String,
    enum: ['todo', 'in-progress', 'completed'],
    default: 'todo'
  }
 
});

module.exports = mongoose.model("TaskTodo", TaskTodoSchema);







