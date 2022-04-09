const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    content: {
      type: String,
      max: 50000,
    },
    like: {
      type: String,
      max: 50000,
    },
    ideaStatus: {
      type: Boolean,
      default: [false],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Idea", PostSchema);