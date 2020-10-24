const mongoose = require("mongoose");

const { Schema } = mongoose;
const UserSchema = new Schema(
  {
    username: { type: String },
    hashedPassword: { type: String },
    university: {type: String},
    description: {type: String},
    verified: {type: Number, default: 0},
  },
  {
    university_name: { type: String },
    isUni: {type: Number,  default: 0 },
    UniveristyDescription: {type: String},
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);
const User = mongoose.model("User", UserSchema);

module.exports = User;
