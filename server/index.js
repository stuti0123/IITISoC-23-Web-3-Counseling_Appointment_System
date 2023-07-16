const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./Users");

const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    throw error;
  }
};

connect();

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  try {
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error saving user to database" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
