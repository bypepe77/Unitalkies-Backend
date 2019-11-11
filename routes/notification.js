const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const User = require("../models/User");

router.get("/all", async (req, res, next) => {
  console.log("Notifications");

});

module.exports = router;
