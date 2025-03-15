import express from "express";
import { ConnectDB } from "./config/db.js";
import authRoute from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

let app = express();
app.use(express.json());
ConnectDB();

// auth routes
app.use("/auth", authRoute);
app.use("/product", productRoutes);

app.listen(6000, () => {
  console.log("running");
});
