const Food = require("../models/foodModel");

const foodCtrl = {
  getFoods: async (req, res) => {
    try {
      const foods = await Food.find({});
      res.json(foods);
    } catch (err) {
      return res.error.serverErr(res, err);
    }
  },
  createFood: async (req, res) => {
    try {
      const { content, image, price } = req.body;

      const newFood = new Food({
        content,
        image,
        price,
      });
      await newFood.save();

      res.status(201).json({ message: "Created food" });
    } catch (err) {
      return res.error.handleError(res, err);
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

module.exports = foodCtrl;
