const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const User = require("../models/User");
const Notification = require("../models/Notifications");

router.get("/all", async (req, res, next) => {
  const username = req.session.currentUser._id;

  try {
      const notificationCount = await Notification.find({
        notificationTo: username,
        visited: 0,
      });
      res.json(notificationCount);
      
  } catch (error) {
      console.log(error);
  }

});

module.exports = router;
