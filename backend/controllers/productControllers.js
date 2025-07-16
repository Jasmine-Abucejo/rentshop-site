import Product from "../models/ProductDetails.js";
import mongoose from "mongoose";

export const updateProduct = async (req, res) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    res.status(404).json({
      success: false,
      message: "Cannot Find Product",
    });
  }

  try {
    const selectedProduct = await Product.findById(productId);
    if (!selectedProduct) {
      res.status(404).json({
        success: false,
        message: "Cannot find product",
      });
    }

    selectedProduct.availability = !selectedProduct.availability;

    const updatedProductStatus = await selectedProduct.save();

    res.status(200).json({
      success: true,
      message: "Successfully updated product availability",
      product: updatedProductStatus,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  if (
    !product.productName ||
    !product.size ||
    !product.material ||
    !product.color
  ) {
    return res.status(400).json({
      success: false,
      message: "incomplete fields",
    });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      message: "successfully added new product",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "server error in adding new product" });
    console.log(error.message);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      message: "Successfully fetched all products",
      products: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
