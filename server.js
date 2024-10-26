const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/todo-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('Error connecting to MongoDB', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
