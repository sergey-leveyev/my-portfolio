const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter project title"],
    trim: true,
    maxLength: [100, "title cannot exceed 100 characters"],
  },
  description: {
    type: String,
    // required: [true, "Please enter project description"],
    trim: true,
    maxLength: [500, "description cannot exceed 500 characters"],
  },
  // images: [
  //   {
  //     public_id: {
  //       type: String,
  //       required: true,
  //     },
  //     url: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  source: {
    type: String,
  },
  visit: {
    type: String,
  },
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
