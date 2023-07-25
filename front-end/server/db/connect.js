const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error.message);
  }
};

module.exports = connectDB;