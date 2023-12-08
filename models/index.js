const mongoose = require('mongoose');

// Import your individual models
const User = require('./user');
const Thought = require('./thought');
const Reaction = require('./reaction');

// Export the models
module.exports = {
  User,
  Thought,
  Reaction,
};
