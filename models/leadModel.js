const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    appartmentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Appartments",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Leads", leadSchema);
