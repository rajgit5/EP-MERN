import express from "express";
import { signupController,loginController } from "../controllers/signupController.js";

let authRoute = express.Router();

// signup routes
authRoute.post('/signup',signupController)
authRoute.post('/login',loginController)

export default authRoute;