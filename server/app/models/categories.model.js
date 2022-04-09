const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    ideas: [{ type: mongoose.Types.ObjectId, ref: 'Idea' }],
    content: {
      type: String,
      max: 50000,
    },
    img: {
      type: String,
    },
    dateStart: {
      required: true,
      type: String,
    },
    dateEnd: {
      required: true,
      type: String,
    },
    categoriesStatus: {
      type: Boolean,
      default: [false],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categories", PostSchema);