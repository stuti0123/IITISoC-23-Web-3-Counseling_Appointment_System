const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./Users');
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

connectDB()
  .then(() => {
    console.log('MongoDB Connection Successful');
  })
  .catch((error) => {
    console.error('MongoDB Connection Unsuccessful:', error);
  });

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

app.get('/getUsers', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.post('/createUser', async (req, res) => {
  const { name, email, date, time } = req.body;
  try {
    const newUser = await UserModel.create({ name, email, date, time });
    res.json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
