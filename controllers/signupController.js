import { accessKey } from "../key.js";
import { userModel } from "../model/user.js";
import jwt from "jsonwebtoken";
export const signupController = async (req, res) => {
  try {
    let check = await userModel.findOne({ email: req.email });
    if (check) {
      res.status(400).json("user already exist");
      return;
    }
    let create = new userModel(req.body);
    await create.save();
    res.status(201).json("user created");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const loginController = async (req, res) => {
  try {
    let find = await userModel.findOne(req.body);
    if (!find) {
      res.status(400).json("user not available, login first");
      return;
    }
    let accessToekn = jwt.sign({id:find._id}, accessKey, { expiresIn: "1d" });
    res.status(200).json({ msg: "login success", token: accessToekn });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
