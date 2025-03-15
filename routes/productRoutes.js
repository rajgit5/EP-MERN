import express from "express";
import { createController,getController } from "../controllers/createController.js";
import { jwtVerify } from "../middleware/jwtMiddleware.js";

let productRoutes = express.Router();

// signup routes
productRoutes.post("/",jwtVerify, createController);
productRoutes.get("/",jwtVerify, getController);

export default productRoutes;
