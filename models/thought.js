

const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true },
  // Add other thought properties as needed
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
