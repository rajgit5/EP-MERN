import {productModel} from "../model/product.js";
export const createController = async (req, res) => {
  try {
    let create = new productModel({ ...req.body,userId:req.user.id});
    await create.save();
    res.status(201).json({ msg: "created", product: token });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getController = async (req, res) => {
    try {
      let get = await productModel.find({userId:req.user.id})
      res.status(200).json(get);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
