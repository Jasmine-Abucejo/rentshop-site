import express from "express";
import {
  createClient,
  updateClient,
  getClients,
  getClient,
  getClientsByDate,
} from "../controllers/clientControllers.js";

const router = express.Router();
router.put("/:clientId", updateClient);
router.post("/:productId", createClient);
router.get("/", getClients);
router.get("/grouped", getClientsByDate);
router.get("/:clientId", getClient);
export default router;
