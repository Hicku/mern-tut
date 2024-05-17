const expressHandler = require("express-async-handler");

const Goal = require("../model/goalModel");

// description: get goals
// method: GET /api/goals
// access: Private
const getGoals = expressHandler(async (req, res) => {
  const goals = await Goal.find();

  res.json(goals);
});

// description: create goal
// method: POST /api/goals
// access: Private
const createGoal = expressHandler(async (req, res, next) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Text is required");
  }

  const goal = await Goal.create({ text: req.body.text });

  res.json(goal);
});

// description: update goal
// method: PUT /api/goals/:id
// access: Private
const updateGoal = expressHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(updatedGoal);
});

// description: delete goal
// method: DELETE /api/goals/:id
// access: Private
const deleteGoal = expressHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.deleteOne();
  res.json({ id: req.params.id });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };

// Path: server/controller/goalController.js
