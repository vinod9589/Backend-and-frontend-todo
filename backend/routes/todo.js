const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json({
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    res.status(200).json({
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const newtodo = await todo.save();

    res.status(200).json({
      data: newtodo,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(400).json({ message: "Todo does not exist" });
    }
    todo.fristname = req.body.fristname || todo.fristname;
    todo.lastname = req.body.lastname || todo.lastname;
    todo.email = req.body.email || todo.email;
    todo.department = req.body.department || todo.department;

    todo.salary = req.body.salary || todo.salary;

 
    
    const updatedUser = await todo.save();

    res.status(200).json({
      data: updatedUser,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Todo is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
