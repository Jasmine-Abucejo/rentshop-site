import mongoose from "mongoose";
import Client from "../models/ClientDetails.js";

export const updateClient = async (req, res) => {
  const { clientId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(clientId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid request id.",
    });
  }

  const client = req.body;

  try {
    const updatedClient = await Client.findByIdAndUpdate(clientId, client, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Successfully updated this client",
      data: updatedClient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
export const getClients = async (req, res) => {
  try {
    const filter = { ...req.query };
    const clients = await Client.find(filter).populate("products");
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

export const getClientsByDate = async (req, res) => {
  try {
    const groupedClients = await Client.aggregate([
      {
        $lookup: {
          from: "products", // must match the actual collection name in MongoDB (lowercase)
          localField: "products",
          foreignField: "_id",
          as: "products",
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          clients: { $push: "$$ROOT" },
        },
      },
      {
        $project: {
          _id: 0,
          date: "$_id",
          clients: 1,
        },
      },
      { $sort: { date: -1 } },
    ]);

    res
      .status(200)
      .json({
        success: true,
        data: groupedClients,
        message: "Successfully grouped data",
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
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
    const client = await Client.findById(clientId).populate("products");
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
