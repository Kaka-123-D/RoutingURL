const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let ret = {
    status: "ERR",
    data: "ACTION-NOT-FOUND",
  };
  res.json(ret);
});

module.exports = router;
