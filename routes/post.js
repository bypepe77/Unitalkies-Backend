const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const User = require("../models/User");
const Follow = require("../models/Follow");
const mongoose = require("mongoose");

router.post("/:username/new", async (req, res, next) => {
  const { username } = req.params;
  const { text, university } = req.body;
  try {
    const user = await User.find({ username });
    console.log(user[0].username);
    const post = await Post.create({
      username: user[0]._id,
      text,
      formUni: university
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
  const username = req.session.currentUser;
  try {
    const followsId = await Follow.find(
      { follower: username._id },
      "followed -_id"
    );
    console.log(followsId);
    const arr = followsId.map(elem => elem.followed);
    console.log(arr);
    const post = await Post.find({ username: arr }).populate("username").sort('-created_at');
    console.log(post);
    res.json(post);
  } catch (error) {
    next(error);
  }
});
router.get("/:postId/:username/like", async (req, res, next) => {
  const { postId, username } = req.params;
  try {
    const user = await User.find({ username });
    const like = await Post.findByIdAndUpdate(postId, {
      $push: { likes: user[0]._id }
    }).populate("username");
    console.log(like);
    res.json(like);
  } catch (error) {
    next(error);
  }
});
router.get("/:postId/:username/unlike", async (req, res, next) => {
  const { postId, username } = req.params;
  try {
    const user = await User.find({ username });
    const like = await Post.findByIdAndUpdate(postId, {
      $pull: { likes: user[0]._id }
    }).populate("username");
    console.log(like);
    res.json(like);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
