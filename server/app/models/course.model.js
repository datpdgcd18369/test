const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      max: 50000,
    },

    dateStart: {
      required: true,
      type: String,
    },
    dateEnd: {
      required: true,
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", PostSchema);