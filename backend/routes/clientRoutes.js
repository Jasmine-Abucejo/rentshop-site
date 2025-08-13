import express from "express";
import {
  createClient,
  updateClient,
  getClients,
  getClient,
} from "../controllers/clientControllers.js";

const router = express.Router();
router.put("/:clientId", updateClient);
router.post("/:productId", createClient);
router.get("/", getClients);
router.get("/:clientId", getClient);
export default router;
