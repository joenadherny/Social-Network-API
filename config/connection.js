const mongoose = require('mongoose');
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to the database');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };
  

  

module.exports = connectDB;





