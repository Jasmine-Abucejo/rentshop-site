import mongoose from "mongoose";

const clientSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    // email: {
    //   type: String,
    //   required: true,
    // },
    dateNeeded: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    returnDate: {
      type: Date,
      required: false,
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);
export default Client;
