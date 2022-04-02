const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {  
    appartmentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }, 
    deviceId: {
      type: String,
      required: true
    },
    event: {
      type: String,
      enum: ['click', 'view']
    }, 
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Device", deviceSchema);
