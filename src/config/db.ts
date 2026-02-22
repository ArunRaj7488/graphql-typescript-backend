import mongoose from "mongoose";
import { DB_URL } from "./env";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${DB_URL}`);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1);
  }
};