import jwt from "jsonwebtoken";
import { accessKey } from "../key.js";

export const jwtVerify = async (req, res, next) => {
  try {
    let token = headers.Authorization?.split(" ")[1];
    let decoded = jwt.verify(token, accessKey);
    if (!decoded) {
      res.status(400).json("invalid token");
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json(error);
    process.exit(1);
  } finally {
    res.json(token);
  }
};
