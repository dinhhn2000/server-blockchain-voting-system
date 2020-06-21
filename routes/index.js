var express = require("express");
var router = express.Router();

const controller = require("../controllers");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Blockchain Server" });
});

router.get("/get-candidates", controller.getCandidates);
router.get("/get-election-name", controller.getElectionName);
router.get("/get-results", controller.getResults);
router.post("/vote", controller.vote);


module.exports = router;
