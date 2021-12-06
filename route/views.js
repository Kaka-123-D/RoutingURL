const express = require("express");
const router = express.Router();

router.get("/get|/get.*", (req, res) => {
  res.render("get")
});

router.get("/list|/list.*", (req, res) => {
  res.render("list")
});

router.get("/update|/update.*", (req, res) => {
  res.render("update")
});

//fallback
router.get("/*", (req, res) => {
  let ret = {
    status: "ERR",
    data: "ACTION-NOT-FOUND",
  };
  res.json(ret);
});

module.exports = router;
