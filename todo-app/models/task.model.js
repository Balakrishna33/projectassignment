const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
