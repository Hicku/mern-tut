const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

const app = express();

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
