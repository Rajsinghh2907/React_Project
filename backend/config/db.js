const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();  // Load environment variables from .env file

const connectDB = async () => {
  try {
    // Get MongoDB URI from environment variable
    const conn = await mongoose.connect(process.env.MONGO_URI, {
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);  // Exit the process with a failure code
  }
};

module.exports = connectDB;
