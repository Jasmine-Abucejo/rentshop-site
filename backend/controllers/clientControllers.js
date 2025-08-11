import mongoose from "mongoose";
import Client from "../models/ClientDetails.js";

export const updateClient = (req, res) => {
  res.status(200).json({ message: "Status successfully updated" });
};
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find().populate("products");
    res.status(200).json({
      success: true,
      data: clients,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching clients",
    });
    console.log(error.message);
  }
};

export const getClient = async (req, res) => {
  const { clientId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(clientId)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid client id" });
  }
  try {
    const client = await Client.findById(clientId);
    if (!client) {
      res.status(404).json({ success: false, message: "Client not found" });
    }

    res.status(200).json({ success: true, data: client });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const createClient = async (req, res) => {
  const { productId } = req.params;
  const client = req.body;

  if (!client.firstName || !client.lastName || !client.mobile) {
    return res.status(400).json({
      success: false,
      message: "incomplete fields",
    });
  }
  const clientData = {
    ...client,
    products: productId ? [productId] : [],
  };
  const newClient = new Client(clientData);
  try {
    await newClient.save();
    res.status(201).json({
      success: true,
      message: "successfully added new client",
      data: newClient,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "server error in adding new client" });
    console.log(error.message);
  }
};
