const express = require("express");
const router = express.Router();
const Pin = require("../models/pinSchema");

// Create a pin
router.post("/", async (req, res) => {
  const pin = new Pin(req.body);
  try {
    const savedpin = await pin.save();
    res.status(200).json(savedpin);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all pins
router.get("/", async (req, res) => {
  try {
    const pins = await Pin.find();
    res.status(200).json(pins);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
