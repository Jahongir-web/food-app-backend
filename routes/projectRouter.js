const router = require("express").Router();
const projectCtrl = require("../controllers/projectCtrl");

router
  .route("/projects")
  .get(projectCtrl.getProjects)
  .post(projectCtrl.createProject);

router
  .route("/projects/:id")
  .put(projectCtrl.updateProject)
  .delete(projectCtrl.deleteProject);

module.exports = router;
