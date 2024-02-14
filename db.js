import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    const databaseName = "health_tracker";

    const connectionString = `${mongoUrl}${databaseName}`;

    await mongoose.connect(connectionString, {});
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
