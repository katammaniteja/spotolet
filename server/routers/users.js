const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
