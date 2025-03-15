import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

export const userModel = mongoose.model("/users", userSchema);
