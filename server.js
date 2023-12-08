const express = require('express');
const connectDB = require('./config/connection'); // Assuming your connection file is in the utils folder
const routes = require('./routes'); // Assuming your routes folder has an index.js file

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
