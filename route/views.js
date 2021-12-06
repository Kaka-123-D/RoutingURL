const express = require("express");
const router = express.Router();

router.get("/get|/get.pug", (req, res) => {
  res.render("get")
});

router.get("/list|/list.pug", (req, res) => {
  res.render("list")
});

router.get("/update|/update.pug", (req, res) => {
  res.render("update")
});

module.exports = router;
