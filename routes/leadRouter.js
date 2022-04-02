const router = require("express").Router();
const leadCtrl = require("../controllers/leadCtrl");

router
  .route("/lead")
  .get(leadCtrl.getLeads)
  .post(leadCtrl.createLead);

module.exports = router;
