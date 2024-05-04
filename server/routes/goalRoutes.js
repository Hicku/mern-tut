const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.get("/", (req, res) => {
  res.json({ message: "Get goals" });
});

router.post("/", (req, res) => {
  res.json({ message: "Create goal" });
});

router.put("/:id", (req, res) => {
  res.json({ message: `Update goal ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `Delete goal ${req.params.id}` });
});
module.exports = router;
