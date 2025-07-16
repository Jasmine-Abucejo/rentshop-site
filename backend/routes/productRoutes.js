import express from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "../controllers/productControllers.js";

const router = express.Router();
router.patch("/:productId", updateProduct);
router.post("/add-product", createProduct);
router.get("/", getProducts);
export default router;
