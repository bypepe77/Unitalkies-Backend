const mongoose = require("mongoose");

const { Schema } = mongoose;
const PostSchema = new Schema(
  {
    username: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    text: { type: String }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);
const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
