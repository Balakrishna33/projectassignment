const Task = require('../models/task.model');

// Geting all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tasks', error: err });
  }
};

// Adding a new task
exports.createTask = async (req, res) => {
  const { description } = req.body;
  try {
    const newTask = new Task({ description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: 'Error creating task', error: err });
  }
};

// Update a task (marked as complete/incomplete)
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { description, completed } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, { description, completed }, { new: true });
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: 'Error updating task', error: err });
  }
};

// Deleting a task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting task', error: err });
  }
};
