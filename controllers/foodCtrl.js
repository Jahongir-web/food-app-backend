const router = require("express").Router();
const cloudinary = require("cloudinary");
const fs = require("fs");
const Food = require("../models/foodModel");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const foodCtrl = {
  getFoods: async (req, res) => {
    try {
      const foods = await Food.find({});
      res.json(foods);
    } catch (err) {
      return res.json(err.message);
    }
  },
  createFood: async (req, res) => {
    try {
      
      if (!req.files || Object.keys(req.files).length === 0)
      return res.json('No upload!');
      
      const file = req.files.files;
      if (file.size > 15 * 1024 * 1024) {
        removeTmp(file.tempFilePath);
        return res.error.invalidSize(res);
      }

      if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
        removeTmp(file.tempFilePath);
        return res.error.invalidType(res);
      }

      await cloudinary.v2.uploader.upload(
        file.tempFilePath,
        { folder: "Food app" },
        async (err, result) => {
          if (err) console.log(err); 

          removeTmp(file.tempFilePath);

          // res.json({ public_id: result.public_id, url: result.secure_url });
          req.body.image = { public_id: result.public_id, url: result.secure_url }
        }
      );

      const { content, image, price } = req.body;
              
      const newFood = new Food({
        content,
        image,
        price,
      });
      await newFood.save();

      res.status(201).json({ message: "Created food" });
    } catch (err) {
      return res.json(err.message);
    }
  },
  updateFood: async (req, res) => {
    try {
      const food = await Food.findByIdAndUpdate(req.params.id, req.body);
      if (!food) return res.json({ message: "food not found!" })

      res.json({ message: "Updated food" });
    } catch (err) {
      return res.error.handleError(res, err);
    }
  },
  deleteFood: async (req, res) => {
    try {
      const food = await Food.findByIdAndDelete(req.params.id);
      if (!food) return res.json({ message: "food not found!" })
      res.json({ message: "Deleted food" });
    } catch (err) {
      return res.error.handleError(res, err);
    }
  },
};

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = foodCtrl;
