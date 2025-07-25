import express from "express";
import {
  createClient,
  updateClient,
  getClients,
} from "../controllers/clientControllers.js";

const router = express.Router();
router.patch("/:clientId", updateClient);
router.post("/:productId", createClient);
router.get("/", getClients);
export default router;
