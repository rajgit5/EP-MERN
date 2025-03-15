import mongoose from "mongoose";

export async function ConnectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ep-mern");
    console.log("connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
