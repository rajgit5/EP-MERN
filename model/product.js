import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
  userId: { type: String },
  name: String,
  description: String,
  price: Number,
});

export const productModel = mongoose.model("/products", productSchema);
