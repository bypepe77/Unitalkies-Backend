var express = require("express");
var router = express.Router();

router.get("/:followed_by/:followed/follow", async (req, res, next) => {
  const { followed_by, followed } = req.params;
  try {
    res.json(like);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
