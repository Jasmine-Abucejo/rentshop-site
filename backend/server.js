import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

dotenv.config();
console.log(process.env.PORT);
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/clients", clientRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  connectDB();
  console.log("Server started");
});
