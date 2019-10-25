const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const User = require("../models/User");

router.get("/:username", async (req, res, next) => {
    const { username } = req.params;
    try {
      const user = await User.find({username})
      const posts = await Post.find({username: user[0]._id}).populate("username")
      res.json({user, posts});
    } catch (error) {
      next(error);
    }
  });

module.exports = router;