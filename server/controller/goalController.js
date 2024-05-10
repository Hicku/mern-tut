const expressHandler = require("express-async-handler");

// description: get goals
// method: GET /api/goals
// access: Private
const getGoals = expressHandler(async (req, res) => {
  res.json({ message: "Get goals" });
});

// description: create goal
// method: POST /api/goals
// access: Private
const createGoal = expressHandler(async (req, res, next) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Text is required");
  }
  // Your create goal logic here

  res.json({ message: "Create goal" });
});

// description: update goal
// method: PUT /api/goals/:id
// access: Private
const updateGoal = expressHandler(async (req, res) => {
  res.json({ message: "Update goal" });
});

// description: delete goal
// method: DELETE /api/goals/:id
// access: Private
const deleteGoal = expressHandler(async (req, res) => {
  res.json({ message: "Delete goal" });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };

// Path: server/controller/goalController.js
