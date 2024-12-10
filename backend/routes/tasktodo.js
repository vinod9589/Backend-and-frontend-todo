const express = require("express");
const router = express.Router();
const TaskTodo = require("../models/TaskTodo");

router.get("/", async (req, res) => {
  try {
    const tasktodo = await TaskTodo.find();
    res.status(200).json({
      data: tasktodo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tasktodo = await TaskTodo.findById(req.params.id);

    res.status(200).json({
      data: tasktodo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const tasktodo = new TaskTodo(req.body);
    const newtasktodo = await tasktodo.save();

    res.status(200).json({
      data: newtasktodo,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const tasktodo = await TaskTodo.findById(req.params.id);

    if (!tasktodo) {
      return res.status(400).json({ message: "TaskTodo does not exist" });
    }
    tasktodo.title = req.body.title || tasktodo.title;
    tasktodo.discription = req.body.discription || tasktodo.discription;
   

 
    
    const updatedUser = await tasktodo.save();

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
    await TaskTodo.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "TaskTodo is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
