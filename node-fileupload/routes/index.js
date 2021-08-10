const express = require('express');
const router  = express.Router();
const pjson   = require("../package.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    name: pjson.name,
    version: pjson.version,
    description: pjson.description,
    author: pjson.author,
  });
});

module.exports = router;