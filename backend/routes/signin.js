const express = require("express");
const router = express.Router();
const SignIn = require("../models/SignIn");

router.get("/", async (req, res) => {
  try {
    const signin = await SignIn.find();
    res.status(200).json({
      data: signin,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const signin = await SignIn.findById(req.params.id);

    res.status(200).json({
      data: signin,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const signin = new SignIn(req.body);
    const newsignin = await signin.save();

    res.status(200).json({
      data: newsignin,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const signin = await SignIn.findById(req.params.id);

    if (!signin) {
      return res.status(400).json({ message: "SignIn does not exist" });
    }
    signin.fristname = req.body.fristname || signin.fristname;
    signin.lastname = req.body.lastname || signin.lastname;
    signin.email = req.body.email || signin.email;
    signin.department = req.body.department || signin.department;

    signin.salary = req.body.salary || signin.salary;

 
    
    const updatedUser = await signin.save();

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
    await SignIn.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "SignIn is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
