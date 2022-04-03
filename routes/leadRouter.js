const router = require("express").Router();
const leadCtrl = require("../controllers/leadCtrl");

router
  .route("/lead")
  .post(leadCtrl.sendLead)

module.exports = router;
