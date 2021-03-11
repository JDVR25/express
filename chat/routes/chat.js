const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.put("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.delete("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
