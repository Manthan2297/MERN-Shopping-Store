import express from "express";

import {
  getProducts,
  createProduct,
  prodDelete,
  updateProd,
} from "../controllers/product.controller.js";

const router = express.Router();
router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProd);
router.delete("/:id", prodDelete);

export default router;
