const express = require('express');
const router = express.Router();

// Import individual route folders
const apiRoutes = require('./api');

// Set up routes
router.use('/api', apiRoutes);

module.exports = router;
