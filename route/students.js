const express = require("express");
const router = express.Router();

router.put("/:id", (req, res) => {
  let ret = {
    status: "OK",
    data: req.body,
  };
  res.json(ret);
});

router.get("/", (req, res) => {
  let ret = {
    status: "OK",
    data: [1, 2, 3, 4],
  };
  res.json(ret);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let ret = {
    status: "OK",
    data: { msv: id },
  };
  res.json(ret);
});

module.exports = router;
