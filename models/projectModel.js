const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    developerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Developer",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    floor: {
      from: {
        type: Number,
        default: 1,
      },
      to: {
        type: Number,
        required: true,
      },
    },
    area: {
      from: {
        type: Number,
        default: 10,
      },
      to: {
        type: Number,
        required: true,
      },
    },
    rooms: {
      from: {
        type: Number,
        default: 1,
      },
      to: {
        type: Number,
        required: true,
      },
    },
    repair: {
      type: Boolean,
      default: false,
    },
    parking: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    year: {
      type: Number,
      required: true,
    },
    location: {
      address: {
        type: String,
        required: true,
      },
      landmark: {
        type: String,
        required: true,
      },
      map: {
        type: String,
        required: true,
      },
    },
    images: {
      type: [
        {
          url: {
            type: String,
            required: true,
          },
          public_id: {
            type: String,
            required: true,
          },
        },
      ],
      default: [],
    },
    info: {
      uz: {
        type: String,
        required: true,
      },
      ru: {
        type: String,
        default: null,
      },
      en: {
        type: String,
        default: null,
      },
    },
    appartments: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Projects", projectSchema);
