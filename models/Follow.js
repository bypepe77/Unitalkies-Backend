const mongoose = require("mongoose");

const { Schema } = mongoose;
const FollowSchema = new Schema(
  {
    followed_by: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    followed: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);
const Follow = mongoose.model("Follow", FollowSchema);

module.exports = Follow;
