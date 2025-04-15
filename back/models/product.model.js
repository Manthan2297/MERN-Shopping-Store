import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String, // name of the product
      required: true,
    },
    price: {
      type: Number, // price of the product
      required: true,
    },
    description: {
      type: String,
      required: true, // description of the product
    },
    image: {
      type: String, // image url
      required: true, // image url
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  }
);

const Product = mongoose.model("Product", productSchema); // create a model from the schema
export default Product; // export the model
