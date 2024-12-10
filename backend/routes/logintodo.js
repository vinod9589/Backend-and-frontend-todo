const express = require("express");
const router = express.Router();
const LoginTodo = require("../models/LoginTodo");

router.get("/", async (req, res) => {
  try {
    const logintodo = await LoginTodo.find();
    res.status(200).json({
      data: logintodo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const logintodo = await LoginTodo.findById(req.params.id);

    res.status(200).json({
      data: logintodo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const logintodo = new LoginTodo(req.body);
    const newlogintodo = await logintodo.save();

    res.status(200).json({
      data: newlogintodo,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const logintodo = await LoginTodo.findById(req.params.id);

    if (!logintodo) {
      return res.status(400).json({ message: "LoginTodo does not exist" });
    }
    logintodo.fristname = req.body.fristname || logintodo.fristname;
    logintodo.lastname = req.body.lastname || logintodo.lastname;
    logintodo.email = req.body.email || logintodo.email;
    logintodo.department = req.body.department || logintodo.department;

    logintodo.salary = req.body.salary || logintodo.salary;

 
    
    const updatedUser = await logintodo.save();

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
    await LoginTodo.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "LoginTodo is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
