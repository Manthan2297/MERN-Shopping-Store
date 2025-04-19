import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in fetching products");
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body; // get the product from the request body
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  const newproduct = new Product(product);
  try {
    await newproduct.save();
    res.status(201).json({ success: true, data: newproduct });
  } catch (error) {
    console.log("Error in Creating new products");
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const prodDelete = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid ID" });
  }

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error("Error in deleting product", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateProd = async (req, res) => {
  const { id } = req.params;
  const product = req.body; // get the product from the request body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Error occured" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log("Error in updating product");
    res.status(500).json({ success: false, message: "Server error" });
  }
};
