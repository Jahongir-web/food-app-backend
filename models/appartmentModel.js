const mongoose = require("mongoose");

const appartmentSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Projects",
    },
    image: {
      type: Object,
      required: true,
    },
    room: {
      type: Number,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    bathroom: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    leads: {
      type: Array,
      default: [],
    },
    click: {
      type: Number,
      default: 0,
    },
    view: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Appartments", appartmentSchema);
