const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected:${conn.connection.host}`.cyan.underline);
  } catch (error) {
      console.log(`Error:${error.message}`.red.bold);
      process.exit();
  }
};
module.exports = connectDb;