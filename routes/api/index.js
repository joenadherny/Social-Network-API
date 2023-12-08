const express = require('express');
const router = express.Router();

// Import individual route files
const userRoutes = require('./users');
const thoughtRoutes = require('./thoughts');

// Set up routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
