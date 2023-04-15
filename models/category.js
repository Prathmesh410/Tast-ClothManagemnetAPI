const mongoose = require ("mongoose");

const categoryShcema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 50
    },
    size: {
      type: String,
      trim: true,
      required: true,
      maxlength: 10
    },
    season: {
      type: String,
      trim: true,
      required: true,
      maxlength: 20
    },
    gender: {
      type: String,
      required: true,
      maxlength: 10
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category",categoryShcema);