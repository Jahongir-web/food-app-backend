const router = require("express").Router();
const foodCtrl = require("../controllers/foodCtrl");

router
  .route("/food")
  .get(foodCtrl.getFoods)
  .post(foodCtrl.createFood);

router
  .route("/food/:id")
  .put(foodCtrl.updateFood)
  .delete(foodCtrl.deleteFood);

module.exports = router;
