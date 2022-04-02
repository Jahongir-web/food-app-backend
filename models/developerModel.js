const mongoose = require("mongoose");

const developerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: Object,
    required: true,
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
  contact: {
    phone: {
      type: String,
      required: true,
    },
    web: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    callCenter: {
      type: String,
    },
  },
  social: {
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    tiktok: {
      type: String,
    },
    telegram: {
      type: String,
    },
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
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
  projects: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Developers", developerSchema);
