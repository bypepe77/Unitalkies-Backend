const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const User = require("../models/User");

router.post("/:username/new", async (req, res, next) => {
  const { username } = req.params;
  const { text } = req.body;
  try {
    const user = await User.find({ username });
    console.log(user[0].username);
    const post = await Post.create({
      username: user[0]._id,
      text
    });
    res.json({
      status: 200,
      post
    });
  } catch (error) {
    next(error);
  }
});

router.get("/all", async (req, res, next) => {
  try {
    const post = await Post.find()
    res.json(post);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
