// description: get goals
// method: GET /api/goals
// access: Private
const getGoals = async (req, res) => {
  res.json({ message: "Get goals" });
};

// description: create goal
// method: POST /api/goals
// access: Private
const createGoal = async (req, res, next) => {
  try {
    if (!req.body.text) {
      res.status(400);
      throw new Error("Text is required");
    }
    // Your create goal logic here

    res.json({ message: "Create goal" });
  } catch (error) {
    // Pass the error to the next middleware
    next(error);
  }
};

// description: update goal
// method: PUT /api/goals/:id
// access: Private
const updateGoal = async (req, res) => {
  res.json({ message: "Update goal" });
};

// description: delete goal
// method: DELETE /api/goals/:id
// access: Private
const deleteGoal = async (req, res) => {
  res.json({ message: "Delete goal" });
};

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };

// Path: server/controller/goalController.js
