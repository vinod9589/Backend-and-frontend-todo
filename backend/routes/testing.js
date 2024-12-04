const express = require("express");
const router = express.Router();
const Testing = require("../models/Testing");

router.get("/", async (req, res) => {
  try {
    const testing = await Testing.find();
    res.status(200).json({
      data: testing,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const testing = await Testing.findById(req.params.id);

    res.status(200).json({
      data: testing,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const testing = new Testing(req.body);
    const newtesting = await testing.save();

    res.status(200).json({
      data: newtesting,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const testing = await Testing.findById(req.params.id);

    if (!testing) {
      return res.status(400).json({ message: "Testing does not exist" });
    }
    testing.fristname = req.body.fristname || testing.fristname;
    testing.lastname = req.body.lastname || testing.lastname;
    testing.email = req.body.email || testing.email;
    testing.department = req.body.department || testing.department;

    testing.salary = req.body.salary || testing.salary;

 
    
    const updatedUser = await testing.save();

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
    await Testing.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Testing is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
